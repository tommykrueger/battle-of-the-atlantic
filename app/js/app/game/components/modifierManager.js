
/**
 *
 */
export default class ModifiersManager {


	constructor ( options = {} ) {

    this._modifiers = [];

	}


  get (modifier) {

    return this.modifiers[modifier];

  }

}
