
// base classes
import Model from '../framework/model';


export default class Unit extends Model {


	constructor ( options = {} ) {

    super();

    this.cargo = 0;

	}

	getPosition () {

		return this.position;

	}


}
