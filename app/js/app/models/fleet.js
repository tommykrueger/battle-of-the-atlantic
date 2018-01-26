
// base classes
import Model from '../framework/model';
import FleetView from '../views/fleet';


/**
 * A Fleet is a collection of ships.
 * A Fleet is more likely a group of ships
 */
export default class Fleet extends Model {


	constructor ( options = {} ) {

    super(options);

		console.log(options.properties);

		// flag for changed data set
		this.changedDataFlag = true;

		this.renderView();
		this.initEvents();
		this.setPosition();

	}


	renderView () {

		let fleetIcon = this.defineFleetFlagshipIcon();

		this.$el = $('<div class="fleet"></div>');

		this.$view = $(`
			<span class="fleet-units country-${this.get('country')}">
				<span class="fleet-size">${this.get('units').length}</span>
			</span>
			<span class="fleet-icon fleet-icon-${fleetIcon}"></span>
			<span class="fleet-name">${this.get('name')}</span>
		`);

		$('body').append( this.$el.html(this.$view) );

		this.$el.css({
			'margin-left': -( this.$el.width()/2 ),
			'margin-top': -( this.$el.height()/2 )
		});

	}


	renderWaypoints () {

		this.game.components.map.clearFleetWaypoints();

		if (this.get('waypoints').length) {
			let p = [this.get('position')];
			let path = [...p, ...this.get('waypoints')];

			this.game.components.map.addFleetPath(path);
		}

	}


	initEvents () {

		this.$el.on('click', (e) => {

			this.game.interface.components.detail.setData( this.getData() );
			this.renderWaypoints();
			this.game.selectedModel = this;

		});

	}


	getData () {

		return {
			name: this.get('name'),
			units: this.get('units'),
			icon: this.defineFleetFlagshipIcon()
		}

	}


	getView () {

		return this.$view;

	}



	setPosition ( pos = {} ) {

		if (pos.x)
			this.position = pos;

		// console.log('newpos', this.position);
		pos = this.get('position');
		pos = this.game.components.map.projection([pos[1], pos[0]]);
		// console.log(pos[0]);

		this.$el.css({ 'transform': 'translate('+ pos[0] + 'px' +','+ pos[1] + 'px' +')' });

		if (this.mode == 'selected') {
			this.renderWaypoints();
		}


	}


	isMoving () {

		return (this.get('waypoints').length >= 1);

	}

	/*
	 * Calculate the position between the current position and the first waypoint
	 * the fleet is moving to. The position is influenced by the fleets speed
	 */
	calculateCurrentPosition () {

		let speed = 15; // km per hour
		let pos = this.get('position');
		let waypoints = this.get('waypoints');
		let newPos = pos;

		// calculate moving only if waypoints are set
		if (waypoints.length) {

			let distance = this.game.components.map.distanceBetween(pos, waypoints[0]);

			//console.log('distance to next point: ', distance);
			//console.log('next waypoint: ', waypoints[0]);

			// waypoint was reached
			if (distance <= speed) {

				this.get('waypoints').shift();

			} else {

				// distance percentage by speed
				let dP = speed * 100 / distance;

				let vecDist = [waypoints[0][0] - pos[0], waypoints[0][1] - pos[1]];

				// get deltaDistance
				vecDist[0] *= (dP/100);
				vecDist[1] *= (dP/100);

				newPos = [pos[0] + vecDist[0], pos[1] + vecDist[1]];

				this.set('position', newPos);

			}

		}

		return newPos;

	}


	mapClicked ( position ) {

		this.set('waypoints', [position]);
		this.renderWaypoints();

	}


  // update this model with data
  update () {

  }

	// TODO to be implemented
	defineFleetFlagshipIcon() {

		return 'cruiser';

	}


}
