// TODO add models

// components
// minimap
// import MapDriver - the mapbox canvas map

import Pathfinder from './pathfinder';

export default class Worldmap {

  constructor ( options = {} ) {

    this.game = options.game;

    console.log('render map with options', options.map);

    // default options
    this.options = {
      rotate: [0, 0],
      scale: 1,
      scaleExtent: [0, 1],
      translate: [0, 1000],
      earthRadius: 6371
    };

    if (options.map) {
      this.options = Object.assign({}, this.options, options.map);
    }


    this.scale = this.options.scale / this.options.scale;

    console.log('creating the Map', this.options);


    this.projectionChanged = 0;
    this.timeout1 = 0;


    this.setViewportDimensions();

    // test render
    this.ships = new Array(0);

    this.constructions = [];
    this.fleets = [];
    this.places = [];
    this.sunkShips = [];

    this.routePaths = [];

    this.isEditMode = false;
    this.currentNode = null;

    this.init();
    this.initEvents();

  }

  init () {

    this.stage = d3.select(".stage");

    this.svg = this.stage.append("svg")
      .attr('id', 'map')
	    .attr("width", this.options.width)
	    .attr("height", this.options.height);


    this.sea = this.svg.append("rect")
      .attr("width", this.options.width)
      .attr("height", this.options.height)
      .attr('class', 'sea');

    // define the map render layers
    this.mainGroup = this.svg.append("g").attr('class', 'main');
    this.fleetsGroup = this.mainGroup.append("g").attr("class", "fleets");
    this.routesGroup = this.mainGroup.append("g").attr("class", "routes-paths");
    this.fleetPathGroup = this.mainGroup.append("g").attr("class", "fleet-paths");
    this.shipsGroup = this.mainGroup.append("g").attr("class", "ships");


		this.projection = d3.geo.naturalEarth()
			.scale(this.options.scale)
      .rotate(this.options.rotate)
	    .translate([this.options.width / 2 + this.options.translate[0], this.options.height / 2 + this.options.translate[1]])
      //.translate([this.options.width / 2, this.options.height - 100])
      .precision(.1);

    this.path = d3.geoPath()
      .projection(this.projection);

    this.line = d3.svg.line()
	    .x((d) => { return this.projection([d[1], d[0]])[0]; })
      .y((d) => { return this.projection([d[1], d[0]])[1]; })
      .interpolate("monotone");


    /* for testing
    this.lineString = this.svg.append("path")
      .datum({type: "LineString", coordinates: [[47.34164617, -7.26147461], [116.35, 39.91]]})
      .attr("class", "arc")
      .attr("d", this.path);
    */

    this.scale0 = this.projection.scale();
    // this.scale0 = (this.width - 1) / 2 / Math.PI;

    this.zoom = d3.behavior.zoom()
      .translate([this.options.width / 2 + this.options.translate[0], this.options.height / 2 + this.options.translate[1]])
      .scale(this.projection.scale())
      .scaleExtent(this.options.scaleExtent)
      //.scaleExtent([0, 4 * this.scale0])
      .on("zoom", this.zoomed.bind(this));

    this.rect = this.svg.append("rect")
      .attr("width", this.options.width)
      .attr("height", this.options.height)
      .style("fill", "none")
      .style("pointer-events", "all")
      .call(this.zoom)
        .on("dblclick.zoom", null);


    this.pathsGroup = this.svg.append("g").attr("class", "paths");
    this.nodesGroup = this.svg.append("g").attr("class", "nodes");



		//d3.json("https://gist.githubusercontent.com/abenrob/787723ca91772591b47e/raw/8a7f176072d508218e120773943b595c998991be/world-50m.json", (error, world) => {
    d3.json("json/maps/world-50m-simplified.json", (error, world) => {
    //d3.json("json/maps/world-50m.json", (error, world) => {

      //var features = world.features;
      //console.log(features);

      var self = this;


      this.pathfinder = new Pathfinder({ app: this.app, game: this.game });
      this.pathfinder.loadAll(() => {

        console.log('loaded');
        this.pathfinder.calculateDistances();
        this.renderNodes();
        this.renderPaths();

      });

      this.renderGraticules();
      this.renderLand(world);

      //this.renderPaths();
      //this.renderNodes();
      // this.renderCountries(world);


      this.s = this.shipsGroup
        .selectAll(".ship")
        .data(this.ships)
        .enter()
        .append('circle')
          .attr('class', 'ship')
          .attr('r', 4)
          .attr('cx', () => { return Math.random() * 500 })
          .attr('cy', () => { return Math.random() * 300 });



      setTimeout( () => {

        var i = 0;
        d3.timer(() => {

          //this.projection.rotate([i * .1, 0]);
          //this.redraw();

          i++;

        });


      }, 1000);


		});


  }


  zoomed() {

    let scale = d3.event.scale;


    /*
    if (this.currentProjection == 'orthographic') {
      this.projection
        .scale(d3.event.scale)
        .rotate([d3.event.translate[0] - this.width/2, (d3.event.translate[1] - this.height/2) * -1]);
    }

    else {
      this.projection
        .scale(d3.event.scale)
        .translate([d3.event.translate[0], d3.event.translate[1]]);
    }
    */

    $('body').removeClass('zoom-continent');
    $('body').removeClass('zoom-country');
    $('body').removeClass('zoom-globe');
    $('body').removeClass('zoom-region');
    $('body').removeClass('zoom-place');

    if (scale <= 500) {
      console.log('zoom globe');

      $('body').addClass('zoom-globe');
      $('.place').hide();

    }
    if (scale > 500 && scale <= 1000) {
      console.log('zoom continent');
      $('body').addClass('zoom-continent');
      $('.place').hide();
    }
    if (scale > 1000 && scale <= 1500) {
      console.log('zoom country');
      $('.place').show();
    }
    if (scale > 1500 && scale <= 2000) {
      console.log('zoom region');
    }
    if (scale > 2000 && scale <= 5000) {
      console.log('zoom place');
    }

    console.log(d3.event.scale, d3.event.translate);

    // this.scale = d3.event.scale / this.options.scale;
    /*
    $('.stage')
      .css({
        'transform': 'translate(' + d3.event.translate[0] + 'px, ' + d3.event.translate[1]+ 'px) scale(' + d3.event.scale + ')'
      });
    */

    this.projection
      .scale(d3.event.scale)
      .translate([d3.event.translate[0], d3.event.translate[1]])
      //.translate([this.options.width / 2 + this.options.translate[0], d3.event.translate[1]])
      //.rotate([d3.event.translate[0], 0, 0]);

    this.projectionChanged = 1;

    //this.path.pointRadius(2 * d3.event.scale / this.scale0);

    /*
    this.line = d3.svg.line()
     .interpolate("basis")
     .x((d) => { return this.projection([d[1], d[0]])[0]; })
     .y((d) => { return this.projection([d[1], d[0]])[1]; });
     */

    this.redraw();


    //this.backgroundCircle.attr('r', d3.event.scale);
    //this.path.pointRadius(2 * d3.event.scale / this.scale0);

    //globe and stars spin in the opposite direction because of the projection mode
    //var spaceOrigin = [d3.event.translate[0] * -1, d3.event.translate[1] * -1];
    //space.origin(spaceOrigin);

  }


  redraw() {

    clearInterval(this.timeout1);

    // Redrawing DOM elements on the screen is the most expensive
    // calculation process. We need to split up the rendering process.
    //if (this.projectionChanged) {
    //this.timeout1 = setTimeout(() => {
      this.land.attr('d', this.path);
    //}, 0);

      setTimeout(() => {
        this.graticules.attr("d", this.path);
      }, 40);
    //}


    if (this.nodes != undefined) {
      this.nodes
        .attr('cx', (d) => { return this.projection([d.latlon[1], d.latlon[0]])[0] })
        .attr('cy', (d) => { return this.projection([d.latlon[1], d.latlon[0]])[1] });
    }


    if (this.paths != undefined) {
      this.paths
        .attr('d', (d) => {

          let a = this.pathfinder.nodes.getNodes().filter((n) => { return n.id == d.a })[0];
          let b = this.pathfinder.nodes.getNodes().filter((n) => { return n.id == d.b })[0];

          return this.line([a.latlon, b.latlon])

        });
    }


    // this.land.attr('d', this.path);
    // this.countries.attr('d', this.path);
    // this.countries.attr('d', this.path.projection(this.projection));

    this.fleets.forEach( (fleet) => {
      fleet.setPosition();
    });

    this.places.forEach( (place) => {
      place.setPosition();
    });

    this.sunkShips.forEach( (ship) => {
      ship.setPosition();
    });

    this.constructions.forEach( (construction) => {
      construction.setPosition();
    });

    //d3.select('.line').attr('d', this.path.projection(this.projection));
    // this.lineString.attr('d', this.path)

    // this.fleetPathGroup.attr('d', this.line);
    this.updateFleetPath();
    this.updateRoutes();

  }


  initProjection () {

    //this.projection
      //.scale(this.options.width / 2 / Math.PI)
      //.translate([this.options.width / 2, this.options.width / 2]);

  }


  initEvents () {


    this.clickList = [];


    let self = this;
    this.rect.on('click', function(e) {

      let pos = self.projection.invert(d3.mouse(this));
      self.clickList.push([pos[1], pos[0]]);


      if (!self.currentNode) {
        self.currentNode = self.pathfinder.nodes.addNode([pos[1], pos[0]], 1);
      }

      if (self.isEditMode) {

        let node = self.pathfinder.nodes.addNode([pos[1], pos[0]], 1);


        console.log('add new node', node);

        self.pathfinder.paths.addPath(self.currentNode, node);
        self.pathfinder.save();

        self.renderPaths();
        self.renderNodes();


        self.currentNode = node;
        let n = d3.select('#node-' + self.currentNode.id);
        n.classed('active', !n.classed('active'));

      }



      console.log('clicked at: ', self.clickList);

      if (self.game.selectedModel) {
        self.game.selectedModel.mapClicked( [pos[1], pos[0]] );
      }

    });


    this.rect.on("contextmenu", function (d, i) {
      d3.event.preventDefault();
      self.game.selectedModel = null;
    });


    // console.log(projection.invert(d3.mouse(this)));


    d3.select(window).on('resize', () => {

      this.setViewportDimensions();
      this.initProjection();
      this.redraw();

    });

  }


  setViewportDimensions () {

    this.options.width = window.innerWidth;
    this.options.height = window.innerHeight;

  }




  renderPaths () {



    this.pathsGroup
      .selectAll(".path").remove();

    this.paths = this.pathsGroup
      .selectAll(".path")
      .data(this.pathfinder.paths.getPaths())
      .enter()
      .append('path')
        .attr('class', 'path')
        .attr('d', (d) => {

          let a = this.pathfinder.nodes.getNodes().filter((n) => { return n.id == d.a })[0];
          let b = this.pathfinder.nodes.getNodes().filter((n) => { return n.id == d.b })[0];

          //console.log(a, b);

          return this.line([a.latlon, b.latlon])

        });

  }


  renderNodes () {

    let country = this.game.countries.filter( (c) => { return c.get('id') == 2; })[0];

    this.nodesGroup
      .selectAll(".node").remove();

    this.nodes = this.nodesGroup
      .selectAll(".node")
      .data(this.pathfinder.nodes.getNodes())
      .enter()
      .append('circle')
        .attr('class', (d, i) => {
          if ( country.get('ignore').indexOf(i) != -1 ) return 'node ignored';
          return 'node';
        })
        .attr('id', (d) => { return 'node-' + d.id })
        .attr('r', 4)
        .attr('cx', (d) => { return this.projection([d.latlon[1], d.latlon[0]])[0] })
        .attr('cy', (d) => { return this.projection([d.latlon[1], d.latlon[0]])[1] })
        .on('click', (d) => {

          let node = d3.select('#node-' + d.id);
          node.classed('active', !node.classed('active'));

          if (this.currentNode != null) {

            this.pathfinder.paths.addPath(this.currentNode, d);
            this.pathfinder.save();
            this.currentNode = null;

            node.classed('active', false);
            this.renderPaths();

          } else {
            this.currentNode = d;
          }

        });

  }


  renderGraticules() {

    /*
    this.graticules = this.mainGroup.append('g')
      .attr('class', 'graticules')
      .append("path")
        .datum(d3.geo.graticule())
        .attr("class", "graticule")
        .attr("d", this.path);
    */

    this.graticules = this.mainGroup.append("g")
      .attr("class", "graticules")
      .selectAll("path")
        .data(d3.geo.graticule().lines)
        .enter()
          .append("path")
          .attr('class', 'graticule')
          .attr("d", this.path);

  }

  renderLand (world) {

    this.land = this.mainGroup.append("g")
      .attr("class", "land")
      .selectAll("path")
        .data([topojson.object(world, world.objects.land)])
        //.data(world.features)
        .enter()
        .append("path")
        .attr("d", this.path);

        /*
    this.land = this.mainGroup.append("g")
      .attr("class", 'land')
      .append('path')
        .datum(topojson.merge(world, world.objects.ne_50m_admin_0_countries.geometries))
        .attr("d", this.path);
        */

/*
    this.land = this.mainGroup.append("g")
      .attr("class", 'land')
      .append("path")
      .datum(topojson.merge(world, world.objects.ne_50m_admin_0_countries.geometries))
      .attr("d", this.path);
*/



  }

  renderCountries (world) {

    let country = world.objects.countries.geometries.filter((c) => { return c.properties.name == 'Germany'} );
    country = {type: "GeometryCollection", geometries: country};

    this.countries = this.mainGroup.append("g")
      .attr("class", "countries")
      .selectAll("countries")
        .data([topojson.object(world, country)])
        .enter()
        .append("path")
          .attr('class', 'country')
          .attr("d", this.path);

  }


  addUnit ( unit ) {

    // this.fleetsGroup.append(unit);
    this.fleets.push( unit );

  }


  addSunkShip ( unit ) {

    this.sunkShips.push( unit );

  }


  addPlace ( place ) {

    this.places.push( place );

  }


  addConstruction ( construction ) {

    this.constructions.push( construction );

  }


  addFleetPath (array) {

    if (array.length > 1) {

      console.log(array);

      this.fleetPathData = array;
      let l = this.line(array);

      this.fleetPathGroup
        .append("path")
    			.attr('class', 'fleet-path')
    	 		.attr('d', l);
    }

  }


  updateFleetPath () {

    if (this.fleetPathData != undefined && this.fleetPathData.length > 1) {
      let l = this.line(this.fleetPathData);

      d3.select('.fleet-path')
    	 	.attr('d', l);
    }

  }


  addRoute (array) {

    if (array.length > 1) {

      console.log(array);
      this.routePaths.push(array);
      let l = this.line(array);

      this.routesGroup
        .append("path")
    			.attr('class', 'route-path')
    	 		.attr('d', l);
    }

  }

  updateRoutes () {

    d3.selectAll('.route-path').remove();

    if (this.routePaths.length) {
      this.routePaths.forEach((route) => {

        let l = this.line(route);

        this.routesGroup
          .append("path")
            .attr('class', 'route-path')
            .attr('d', l);

      });
    }


  }


  clearFleetWaypoints () {

    d3.selectAll('.fleet-path').remove();

  }



  getScale () {

    return this.scale;

  }




  drawLine (a, b, c) {

    this.fleetPathGroup.append('path')
      .attr('class', c)
      .attr('d', this.path([a, b]));

  }



  getRandomPosition (tShift = 0) {


    let spots = [
      // near ireland
      [56.48676175, -16.12792969],

      // north atlantic
      [56.46249048, -35.5078125],

      // english coast
      [50.84757295, -4.83398437],

      // near gibraltar
      [35.38904997, -7.11914062]
    ];

    let spot = spots[this.game.arithmetics.random(0, spots.length-1)];

    return [
      spot[0] - Math.random() * (1.1 * tShift/10) + Math.random() * (1.4 * tShift),
      spot[1] - Math.random() * (1.0 * tShift) + Math.random()
    ];

  }


  distanceBetween (pointA, pointB) {

    if (pointA && pointB) {

      var greatArc = d3.geo.greatArc();
      var d = greatArc.distance({
        source: [pointA[1], pointA[0]],
        target: [pointB[1], pointB[0]]
      }) * this.options.earthRadius;

      return d;
    }

  }


  calcDist (a, b) {
    var dLatRad = Math.abs(a.lat - b.lat) * Math.PI/180;
    var dLonRad = Math.abs(a.lon - b.lon) * Math.PI/180;
    // Calculate origin in Radians
    var lat1Rad = a.lat * Math.PI/180;
    var lon1Rad = a.lon * Math.PI/180;
    // Calculate new point in Radians
    var lat2Rad = b.lat * Math.PI/180;
    var lon2Rad = b.lon * Math.PI/180;

    // Earth's Radius
    var eR = 6371;

    var d1 = Math.sin(dLatRad/2) * Math.sin(dLatRad/2) +
       Math.sin(dLonRad/2) * Math.sin(dLonRad/2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
    var d2 = 2 * Math.atan2(Math.sqrt(d1), Math.sqrt(1-d1));

    return (eR * d2);
   }


  update (counter) {

    // update the position of ships
    if (counter % 4 == 0) {

      /*
      this.s.forEach(function(s) {
        //console.log(s);
        s.forEach((es) => {
          d3.select(es).attr('cx', function(d) {
            let r = parseFloat(d3.select(this).attr('cx'));
            let add =(Math.random() < 0.5) ? -0.5 : 0.5;
            return r + add;
          });
        });
      })
      */

    }


  }


  // Misc

  setEditMode () {

    this.isEditMode = !this.isEditMode;

    console.log('mode', this.isEditMode);

  }

}
