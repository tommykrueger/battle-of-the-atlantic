import Component from '../component';

/**
 * Tooltip Component handles simple text tooltips
 */
export default class Expandable extends Component {


	constructor ( options = {} ) {

		super(options);
    this.selector = '[data-expandable]';
		this.control = '.expandable-control';

		// $('body').append(this.$tooltip);

	}


  init () {

    $(this.selector).find(this.control).on('click', (e) => {

      this.$el = $(e.currentTarget).parent();
      this.$el.toggleClass('expanded');

      let $expandableArea = this.$el.find('.expandable-area');
      $expandableArea.slideToggle('500');

    });

  }


}
