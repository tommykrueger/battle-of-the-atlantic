
// base classes
import Model from '../framework/model';


export default class Ship extends Model {


	constructor ( options = {} ) {

    super(options);

		this.app = options.app;
		this.game = options.game;
		this.name = options.name;
		this.position = options.position;

		this.renderView();
		this.setPosition();
		this.initEvents();

	}


	initEvents () {


	}


	renderView () {

		let locales = ['de', 'en', 'su', 'us'];
		let tonnage = 1000 + Math.random() * 10000;

		this.$el = $('<div class="ship ship-sunk" data-tooltip="Sunk Ship: "></div>');
		this.$el.addClass('ship-country-' + locales[this.game.arithmetics.random(0, locales.length-1)]);
		this.$view = $(`<span></span>`);
		$('body').append( this.$el.html(this.$view) );

		this.$el.css({
			'width': 6 + (tonnage/1000) + 'px',
			'height': 6 + (tonnage/1000) + 'px'
		});

	}


	setPosition ( pos = {} ) {

		if (pos.x)
			this.position = pos;

		// console.log('newpos', this.position);

		pos = this.game.components.map.projection([this.position[1], this.position[0]]);
		// console.log(pos[0]);

		this.$el.css({
			'transform': 'translate('+ pos[0] + 'px' +','+ pos[1] + 'px' +')'
		});

	}

  // update this model with data
  update () {



  }


}
