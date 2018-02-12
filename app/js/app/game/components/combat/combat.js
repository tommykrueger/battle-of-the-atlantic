import Component from '../component';

/**
 * Combat Component
 */
export default class Combat extends Component {


	constructor ( options = {} ) {

    super(options);

		this.friendly = options.friendly;
		this.enemy = options.enemy;

		console.log('causing new combat between: ', this.friendly.get('name') , ' and ', this.enemy.get('name'));

		// lock both fleets so they are not avaiable for any other service
		this.friendly.locked = true;
		this.enemy.locked = true;

		this.game.togglePause();
		this.render();
		this.initEvents();

	}


	render () {

		$('.combat').show();

	}


	initEvents () {

		$('.combat .detail-close-btn').on('click', () => {
			$('.combat').hide();
		})

	}

  // setup the combat
  update () {

		// this.updateView();

  }

}
