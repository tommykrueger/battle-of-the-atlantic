
import Nodes from './nodes';
import Paths from './paths';

export default class Pathfinder {

  constructor ( options = {} ) {

    this.app = options.app;
    this.game = options.game;

    this.nodes = new Nodes();
    this.paths = new Paths();

    // a table of nodes with their distances between
    this.distances = [];

    // a list of nodes which should be excluded from pathfinding
    this.exclusion = [];

  }

  // Calculate the distances of paths. A path is a connection between two nodes in a graph
  calculateDistances () {



  }


  findPath (startNode, endNode) {

    return {'path': []};

  }

}
