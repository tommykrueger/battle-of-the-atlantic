export var __useDefault = true;

// include utility classes
import EventManager from './framework/eventmanager'
import Stats from './framework/stats'
import Chunk from './framework/chunk'
import Arithmetics from './framework/arithmetics'

import Config from './config/config';

// TODO add game logic components
import Worldmap from './game/map/worldmap'
import Interaction from './game/components/interaction/interaction'
import Interface from './game/interface'
import Research from './game/research'

// models
import Construction from './models/construction'
import Country from './models/country'
import Fleet from './models/fleet'
import Place from './models/place'
import Scenario from './models/scenario'
import Ship from './models/ship'


// load game components
import ExpandableComponent from './game/components/expandable/expandable'
import TooltipComponent from './game/components/tooltip'

export default class Game {

  constructor () {

    console.log('loading game');

    // 1.0, 2.0, 3.0
    // default: 1 second in real time is one hour in game
    this.speed = 1.0;


    this.money = 1000;
    this.moneyFlow = -2; // per hour

    // the currently selected object
    this.selectedModel = null;

    this.stateRunning = false;

    this.config = new Config();
    this.eventManager = new EventManager();
    this.arithmetics = new Arithmetics();
    this.stats = new Stats();
    this.init();

  }


  init () {

    // do the stuff before the render loop

    // load the selected scenario
    this.scenario = new Scenario({game: this});
    this.scenario.fetch('../server/app.php?action=scenario&id=1', (data) => {
    //this.scenario.fetch('json/scenarios/sealion.json', (data) => {

      console.log('loaded scenario');
      console.log(data);

      if (data) {

        this.data = data;

        this.initComponents();

        this.chunkedData = {
          ships: new Chunk(),
          fleets: new Chunk(),
          places: new Chunk()
        };

        this.countries = [];
        this.fleets = [];

        // init countries (player / AIs)
        // add places to map
        // add fleets to map
        // add units to countries
        // add production queues to countries
        // add research to countries

        this.data.countries.forEach((country) => {

          let countryObject = new Country({
            app: this.app,
            game: this,
            properties: country
          });

          this.countries.push(countryObject);

        });



        if (this.data.fleets.length) {

          this.data.fleets.forEach((fleet) => {

            let fleetInstance = new Fleet({
              game: this,
              properties: fleet
            });

            this.fleets.push(fleetInstance);
            this.components.map.addUnit(fleetInstance);

          });

        }


        this.data.places.forEach( (place) => {

          this.components.map.addPlace(new Place({
            game: this,
            name: place.name,
            position: place.position
          }));

        });


        // render buildings and constructions
        this.data.constructions.forEach( (construction) => {

          this.components.map.addConstruction(new Construction({
            game: this,
            data: construction
          }));

        });


        //let dist1 = this.components.map.distanceBetween(places[0].position, places[1].position);
        //console.log('Distance Liverpool<>Plymouth', dist1);

        //let dist2 = this.components.map.distanceBetween(places[0].position, places[4].position);
        //console.log('Distance Liverpool<>Portsmouth', dist2);

        this.eventManager.registerEvent('game.loaded');
        this.render();

        this.eventManager.trigger('event.occur', (d) => {
          console.log(d);
        });

      }

    });


  }


  initComponents () {

    this.components = {
      map: new Worldmap({ game: this, map: this.data.map }),
      research: new Research(),
      tooltip: new TooltipComponent({ app: this.app, game: this }),
      expandable: new ExpandableComponent({ app: this.app, game: this })
    };

    this.interaction = new Interaction({app: this.app, game: this});
    this.interface = new Interface({app: this.app, game: this});

    this.components.tooltip.init();
    this.components.expandable.init();


    let route = [
      [44.116908037894035, -60.7907881694163],
      [46.01900429772899, -50.46555623540518],
      [49.63371614120294, -46.15589421077445],
      [52.727738014744126, -43.82149394743281],
      [55.81909576120421, -39.96075505036778],
      [59.55844291409168, -31.52100025213261],
      [59.920402576657004, -23.97909170902884],
      [59.920402576657004, -15.718906161819945],
      [53.960477039743836, -3.6877663430591667]
    ];

    let route2 = [
      [-33.6005874686948, 17.1548110832809],
      [-30.597364075020725, 12.357425470236938],
      [-24.68867205187466, 9.22869572259957],
      [-18.683911525249957, 6.7257119244896755],
      [-13.677788196696794, 5.05705605908308],
      [-10.619523525008027, 2.1369082946215365],
      [-8.562977052741617, -0.15749352031253339],
      [-4.002969141984747, -5.163461116532321],
      [1.625265926975199, -11.212338628631233],
      [3.9168314160599467, -13.089576477213654],
      [8.126747506511325, -13.287394840766648]
    ];


    let route3 = [
      [8.126747506511325, -13.287394840766648],
      [8.100392573567316, -14.495632974723733],
      [9.41895646107624, -17.640429776245636],
      [11.853907258424181, -19.16517974061989],
      [17.384166927475135, -19.451070358940065],
      [24.324874197647606, -19.0698828678465],
      [34.669780035820274, -11.827320537068786],
      [44.415783655464665, -11.25553930042844],
      [49.91591600531148, -5.44243006125159]
    ];

    this.components.map.addRoute(route);
    this.components.map.addRoute(route2);
    this.components.map.addRoute(route3);

  }


  render () {

    let startTime = null,
        isRunning = false,
        timeElapsed = 0,
        pause = false,
        pTime = 0;

    this.startDate = Date.now();
    this.currentTime = this.startDate;
    // this.elapsedPaused = 0;

    //this.elapsed = 0;
    this.secondsElapsed = 0;
    // this.secondsFiveElapsed = 5;
    // this.secondsTenElapsed = 10;

    this.counter = 0;


    this.frameCount = 0;

    let step = 0;
    let start = [47.34164617, -7.26147461];
    let end = [30.94034, -29.90990];

    // this.components.map.drawLine(start, end, 'line');
    let dtFrame = 0;
    let tFrameOld = 0;

    // d3 timer uses requestAnimationFrame internally if available. The desired
    // framerate should be 60fps maximum
    this.timer = d3.timer((tFrame) => {

      this.stats.start();

      if (this.stateRunning) {

        tFrame *= this.speed;

        // elapsed time in milliseconds since game start
        timeElapsed = (tFrame - startTime) - pTime;


        // the time in ms per tick (ideally 17ms max (1000/60))
        dtFrame = tFrame - tFrameOld;
        tFrameOld = tFrame;

        this.fleets.forEach( (fleet) => {

          if (fleet.isMoving()) {

            // console.log('fleet moving', fleet.get('name'));
            // try to calculate the current position of the fleet
            let newPos = fleet.calculateCurrentPosition(dtFrame);
            //console.log('new pos', fleet.get('position'));

            fleet.setPosition();

          }

          // checks if an enemy fleet is nearby
          fleet.checkForEnemies();

        });

        // process calculation after every second
        if (this.secondsElapsed != Math.round( (timeElapsed) / 1000) ) {

          console.log('calculate per second');
          this.secondsElapsed++;
          this.frameCount = 0;

          this.countries.forEach((country) => {
            country.update(timeElapsed);
          });

        }

        if ( this.secondsElapsed && this.secondsElapsed % 5 == 0 ) {

          // console.log('calculate per 5 second');

        }

        this.interface.update(timeElapsed);


        //this.currentTime = this.startDate + timeElapsed;

        // console.log('count per frame: ', this.frameCount);

        // 1000 / 60 = 16.6666 => maximum iterations per frame
        // Provide 10 calculation slots for a minimum desired framerate
        // of 30 (60/2 => half speed)
        //  => every slot should have 3 iterations
        switch (this.frameCount) {

          case 0:
            //console.log('Om 0');

            // update the interface
            // this.interface.update(timeElapsed);

            // handle events
            this.scenario.checkEventOccured( timeElapsed );

            break;
          case 3:
            //console.log('Om 3');
            break;
          case 6:
            //console.log('Om 6');
            break;
          case 9:
            //console.log('Om 9');
            break;
          case 12:
            //console.log('Om 12');
            break;
          case 15:
            //console.log('Om 15');
            break;
          case 18:
            //console.log('Om 18');
            break;
          case 21:
            //console.log('Om 21');
            break;
          case 24:
            //console.log('Om 24');
            break;
          case 27:
            //console.log('Om 27');

            this.money += this.moneyFlow;
            $('[data-property="money"]').html(this.money);
            $('[data-property="moneyflow"]').html(this.moneyFlow < 0 ? '(' + this.moneyFlow + ')' : '(+' + this.moneyFlow + ')');

            break;

        }



        // time.text = (timeElapsed/1000).toFixed(2);
        // console.log(timeElapsed);

        // Define the game elements that have to be updated every game tick
        // => Countries Production Queue
        // => Countries Research Queue

        this.counter++;

        // print this every second frame only
        if (this.counter % 100 == 0) {

          step++;

          let p = 0.1 * step; // 10 percent between
          let endStep = [
            start[0] - (Math.abs(end[0] - start[0]) * p),
            start[1] - (Math.abs(end[1] - start[1]) * p)
          ];

          // line between
          //this.components.map.drawLine(start, endStep, 'line2');

          //p = 0.5;
          //endStep = [];
          //this.components.map.drawLine(start, endStep);

        }


        this.elapsed = Date.now();

        // let dt = this.elapsed - this.startDate;
        // this.startDate = this.elapsed;
        // console.log(dt);

        // this.elapsedTime = (new Date(this.elapsed)).getSeconds();

        this.components.map.update(this.counter);

        // What we need to update?
        // - Fleet positions / ship positions
        // - ...

        for (var i in this.chunkedData) {
          // this.chunkedData[i].update();
        }

        // add a sunken ship randomly
        if (1 == this.arithmetics.random(0, 10)) {

          /*
          this.components.map.sunkShips.push(
            new Ship({
              app: this.app,
              game: this,
              position: this.components.map.getRandomPosition(this.secondsElapsed)
            })
          );
          */

          this.components.tooltip.init();

        }


        this.frameCount++;

      }

      // the game is not running
      else {

        pTime = (tFrame - startTime) - timeElapsed;
        timeElapsed = (tFrame - startTime) - pTime;

      }

      this.stats.end();

    });

  }


  getCurrentDate () {

    return this.interface.components.datetime.currentDate;

  }



  adjustSpeed (speed) {

    if (this.speed < 0) {
      this.speed = 1.0;
    }

    else if (this.speed > 3.0) {
      this.speed = 3.0;
    }

    else
      this.speed += speed;

  }


  togglePause() {

    this.stateRunning = !this.stateRunning;

  }


  getDataFromModel (model, id) {

    let m = this.data[model].filter( d => d.id == id );
    return m;

  }

}
