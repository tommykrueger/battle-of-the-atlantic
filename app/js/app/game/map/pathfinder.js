
import Nodes from './nodes';
import Paths from './paths';
import Dijkstra from './dijkstra';

export default class Pathfinder {

  constructor ( options = {} ) {

    this.app = options.app;
    this.game = options.game;

    this.nodes = new Nodes({ app: this.app, game: this.game });
    this.paths = new Paths({ app: this.app, game: this.game });
    this.dijkstra = new Dijkstra();

    // a table of nodes with their distances between
    this.distances = [];

    // a list of nodes which should be excluded from pathfinding
    this.exclusion = [];


    this.calculateDistances();

  }




  // Calculate the distances of paths.
  // A path is a connection between two nodes in a graph
  calculateDistances () {

    let country = this.game.countries.filter( (c) => { return c.get('id') == 2; })[0];
    let ignoreList = country.get('ignore');

    console.log('ignored nodes', country.get('ignore') );

    let nodes = this.nodes.getNodes();
    let paths = this.paths.getPaths();

    for (var i = 0; i < nodes.length; i++) {

			this.distances[i] = new Array();
			for (var j = 0; j < nodes.length; j++){
				this.distances[i][j] = 99999;
			}
		}


    for (var i = 0; i < paths.length; i++) {

			var source = parseInt( paths[i].a );
			var target = parseInt( paths[i].b );
			var distance = paths[i].d;

			var sourceID = null;
			var targetID = null;

			for (var j = 0; j < nodes.length; j++) {
				if ( nodes[j].id == source ) {
					sourceID = j;
				}

				if ( nodes[j].id == target ) {
					targetID = j;
				}
			}

      // add distance for both directions
      if (ignoreList.indexOf(sourceID) != -1 || ignoreList.indexOf(targetID) != -1) {
        distance = 9999;
      }

      this.distances[ sourceID ][ targetID ] = distance;
      this.distances[ targetID ][ sourceID ] = distance;

		}

  }



  findNearestNode( [lat, lon] ) {

		// Find the nearest node of a clicked location on the worldmap
		// The nearest path is within the distance matrix
		// Therefore go through all nodes and check the distance

		var coords = this.game.components.map.projection([lat, lon]);
		var nearestNodeDistance = 9999;
    var nearestNode = null;

		this.nodes.getNodes().forEach( (node) => {

			// console.log('n', node);

			let latlon = node.latlon;
			let pos = this.game.components.map.projection( [ latlon[0], latlon[1] ] );

			// get the distance of each node and compare
			let distX = Math.abs( pos[0] - coords[0] );
			let distY = Math.abs( pos[1] - coords[1] );

			let distance = Math.sqrt( distX * distX + distY * distY );

			if (distance > 0 && distance < nearestNodeDistance) {

				nearestNodeDistance = distance;
				nearestNode = node;

			}

		});

		return nearestNode;
	}

  // tries to find the shortest path
  findPath (startNode, endNode) {

    let path = [];

    // find the nearest node in the graph
    let nearestNode = this.findNearestNode(startNode);

    // find the nearest node near the target position
    let targetNode = this.findNearestNode(endNode);

    console.log(startNode, nearestNode);
    console.log(endNode, targetNode);

    d3.selectAll('.node').classed('active', false);
    d3.select('#node-' + nearestNode.id).classed('active', true);
    d3.select('#node-' + targetNode.id).classed('active', true);

    if (nearestNode.id != undefined && targetNode.id != undefined) {

      var startWaypointID = null;
  		var endWaypointID = null;

  		for (var i = 0; i < this.nodes.getNodes().length; i++) {
  			if ( this.nodes.getNodes()[i].id == nearestNode.id ) {
  				startWaypointID = i;
  			}

        if ( this.nodes.getNodes()[i].id == targetNode.id ) {
  				endWaypointID = i;
  			}
  		}

      path = this.dijkstra.dijkstra(this.distances, startWaypointID, endWaypointID);

    }

    return path;

  }

  // deletes a node and all its paths
  deleteNode (node = null) {

    if (!node) {
      console.log('no node given');
      return;
    }

    console.log('paths length: ', this.paths._paths.length);

    // remove paths of this node
    for (var i=0; i<this.paths._paths.length; i++) {

      if (this.paths._paths[i].a == node.id) {
        console.log('delete:', this.paths._paths[i].a);
        this.paths._paths.splice(i, 1);
      }

      if (this.paths._paths[i].b == node.id) {
        this.paths._paths.splice(i, 1);
      }

    }

    // get paths of this node;
    for (var i=0; i<this.nodes._nodes.length; i++) {

      if (this.nodes._nodes[i].id == node.id) {
        this.nodes._nodes.splice(i, 1);
      }

    }

    this.save();

  }



  loadAll ( cb ) {

    d3.json("../server/data/nodes.json", (error, data) => {

      if (data && data.nodes != undefined) {
        this.nodes._nodes = data.nodes;
        this.paths._paths = data.paths;

        cb();
      }

    });

  }


  save () {

    $.ajax({
      url: '../server/app.php',
      type: 'post',
      data: {
        action: 'save_nodes',
        data: {
          nodes: this.nodes.getNodes(),
          paths: this.paths.getPaths()
        }
      },
      success: function(response) {
        console.log(response);
      }
    });

  }

}
