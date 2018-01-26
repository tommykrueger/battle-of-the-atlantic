
/**
 *
 */
export default class Combat {


	constructor ( options = {} ) {

    this.app = options.app;
    this.game = options.game;

    // a list of friendly units
    this._domestic = [];

    // a list of enemy units
    this._foreign = [];

	}

  // setup the combat
  setup () {
    
  }

}
