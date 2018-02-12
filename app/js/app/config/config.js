
/**
 *
 */
export default class Config {


	constructor ( options = {} ) {

    this.language = {
      available: ['de', 'en'],
      default: 'de'
    };


		this.merchantMarine = {
			'Tanker': 0.2,
			'Cargo Ship': 0.8
		}


		this.cargos = [
			'Sugar',
			'Iron Ore',
			'Oil',
			'Consumer Goods',
			'Wheat'
		];


		this.missions = [

			// the fleet waits for orders
			'None',

			// the fleet tries to find enemy units and attacks them no matter what cost
			'Naval Attack',

			// the fleet is seeking for enemy ships and attacks them if there is a high chance to win
			'Naval Interdiction',

			// the fleet attacks single ships or small fleets and tries to prevent their escape
			'Forced Engagement',

			// the fleet tries to seek and destroy enemy submarines
			'Submarine Attack',

			// the fleet focus on sinking enemy merchant ships and convoys
			'Convoy Rading',

			// the fleet tries to find single ships and sink them before escaping undetected
			// the fleet does not attack protected fleets or convoys
			'Seek and Destroy',

			// the fleet operate undetected to infiltrate enemy harbors or fleets.
			// this mission can only be given to submarines
			'Infiltration',

			// the fleet tries to move undetected (for example to reach a certain operation area)
			'Silent Move',

		];



		this.modifiers = {

			// economy
			tax: 1.0,
			tax_from_puppets: 0.15,

			// production
			production: 1.0,



			// research and tech
			research: 1.0,
			blueprint: 2.5

		}

	}


}
