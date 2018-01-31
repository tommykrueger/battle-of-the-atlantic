
// base classes
import Model from '../framework/model';
import Event from './event';

export default class Scenario extends Model {


	constructor ( options = {} ) {

    super();

		this.game = options.game;
		this.data = {};

		this.occuredEvents = [];

	}


	fetch (url, callback) {

		this.data;

		console.log('loading', url);

		fetch(url)
	    .then((response) => {
	      if (!response.ok)
					return new Error(response);

				return response.json();
	    })
	    .then((myBlob) => {

				// console.log(myBlob);
	      this.data = myBlob;
				this.scenarioData = myBlob;

				if (callback)
					callback(this.data);

	    })
	    .catch((err) => {
				console.log(err);
			});

	}


	getStartDate () {

		if (this.scenarioData) {
			return this.scenarioData.startDate;
		}

	}


	checkWinConditions () {

		this.solved();

	}

	// check if any event have to be triggered
	checkEventOccured ( timeElapsed ) {

		if (this.scenarioData.events.length) {

			this.scenarioData.events.forEach( (event) => {

				if ( this.game.interface.components.datetime.getDateString() == event.date ) {

					if (!event.triggered) {

						console.log('call event', event.name);
						this.occuredEvents.push( new Event({game: this.game, data: event}) );
						event.triggered = true;

						// pause the game once an event occurs
						this.game.togglePause();
					}

				}

			});

		}

	}

	// the scenario was solved - so the player wins
	solved () {

	}

	// the scenario was lost and the game is over
	lost () {

	}


}
