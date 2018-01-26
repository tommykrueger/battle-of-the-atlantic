
// base classes
import Model from '../framework/model';


/**
 *
 */
export default class Construction extends Model {


	constructor ( options = {} ) {

    super();

		this.game = options.game;
		this.data = options.data;

		this.renderView();
		this.initEvents();
		this.setPosition();

	}


	renderView () {

		this.$parentContainer = $('body');
		this.$el = $('<div class="construction"></div>');

		this.$view = $(`
			<span class="construction-type">${this.data.type}</span>
			<span class="construction-radar"></span>
		`);

		this.$parentContainer.append( this.$el.html(this.$view) );

		if (this.data.ranges) {

			let $radarLow = $(`<span class="construction-radar-low"></span>`);
			let $radarHigh = $(`<span class="construction-radar-high"></span>`);

			$radarLow.css({
				width: this.data.ranges.low,
				height: this.data.ranges.low
			});

			$radarHigh.css({
				width: this.data.ranges.high,
				height: this.data.ranges.high
			});

			this.$el.find('.construction-radar').append($radarLow);
			this.$el.find('.construction-radar').append($radarHigh);

		}

	}


	initEvents () {

		this.$el.on('click', (e) => {

			// this.game.interface.components.detail.setData( this.getData() );

		});

	}


	getData () {

		return this.data;

	}


	getView () {

		return this.$view;

	}


	defineRangeRadius (r) {

		return r;

	}



	setPosition () {

		let pos = this.game.components.map.projection([this.data.position[1], this.data.position[0]]);
		let scale = this.game.components.map.getScale();
		// console.log(pos[0]);

		this.$el.css({
			'transform': 'translate('+ pos[0] + 'px' +','+ pos[1] + 'px' +')scale('+ scale +')'
		});

	}


  // update this model with data
  update () {

  }


}
