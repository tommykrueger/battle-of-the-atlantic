
/**
 *
 */
export default class Config {


	constructor ( options = {} ) {

    this.language = {
      available: ['de', 'en'],
      default: 'de'
    };


		this.cargos = [
			'Sugar',
			'Iron Ore',
			'Oil',
			'Consumer Goods',
			'Wheat'
		];

	}


}
