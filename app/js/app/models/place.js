
// base classes
import Model from '../framework/model';


/**
 *
 */
export default class Place extends Model {


	constructor ( options = {} ) {

    super(options);

		this.game = options.game;
		this.name = options.name;
		this.position = options.position;

		this.renderView();
		this.initEvents();
		this.setPosition();

	}


	renderView () {

		let type = this.get('harbor').length ? 'harbor' : 'default';
		let hasUnits = Math.round(Math.random()) ? true : false;

		this.$parentContainer = $('.stage');
		this.$el = $(`<div class="place place-type-${type}"></div>`);

		this.$view = $(`
			<span class="place-name">${this.name}</span>
		`);

		this.$parentContainer.append( this.$el.html(this.$view) );

	}


	initEvents () {

		this.$el.on('click', (e) => {

			// this.game.interface.components.detail.setData( this.getData() );

		});

	}


	getData () {

		return {
			name: this.name
		}

	}


	getView () {

		return this.$view;

	}



	setPosition () {

		let pos = this.game.components.map.projection([this.position[1], this.position[0]]);
		// console.log(pos[0]);

		this.$el.css({
			'transform': 'translate('+ pos[0] + 'px' +','+ pos[1] + 'px' +')'
		});

	}


  // update this model with data
  update () {

  }


}
