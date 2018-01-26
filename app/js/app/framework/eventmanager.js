
/**
 * Event Manager
 *
 * Handles custom events
 */
export default class EventManager {


	constructor ( options = {} ) {

    this.events = new Map();

		this.registerDefaultEvents();

	}


	registerDefaultEvents () {

		this.registerEvent('event.occur', (e) => {
			console.log('event occured', e);
		});

	}


  // register an event
	registerEvent (eventName, callback = function(){}) {

    this.events.has(eventName) || this.events.set(eventName, []);
    this.events.get(eventName).push(callback);

  }

  // register a certain function for a registered event
  registerEventCallback (eventName, callback) {

    this.events.get(eventName).push(callback);

  }


  // call a certain event and invoke its registered functions
  trigger (eventName, ...args) {
    let events = this.events.get(eventName);

    if (events && events.length) {
        events.forEach((e) => {
            e(...args);
        });
        return true;
    }
    return false;
  }


}
