
/**
 *
 */
export default class Modifiers {


	constructor ( options = {} ) {

    this._modifiers = [];

	}


  get (modifier) {

    return this.modifiers[modifier];

  }

}
