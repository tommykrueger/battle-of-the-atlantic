import Component from './component';

/**
 * Tooltip Component handles simple text tooltips
 */
export default class Tooltip extends Component {


	constructor ( options = {} ) {

		super(options);
    this.selector = '[data-tooltip]';
		this.$tooltip = $('<div id="tooltip" class="tooltip"></div>');

		$('body').append(this.$tooltip);

	}


  init () {

    $('body').find(this.selector).on('mouseenter', (e) => {

      this.$el = $(e.currentTarget);

			let text = this.$el.data('tooltip');

			// there is a tooltip with an id found
			if (text.indexOf('#') >= 0) {
				text = this.renderTooltipByID( text );
			}

			this.$tooltip.html(text);
      this.setPosition(e);
      this.show();

    });

    $('body').find(this.selector).on('mousemove', (e) => {

      this.setPosition(e);

    });

    $('body').find(this.selector).on('mouseleave', (e) => {

      this.hide();

    });

  }


	renderTooltipByID ( id ) {

		// try to find static tooltip container
		let $target = $(id);

		if ($target.length)
			return $target.html();


		// create dynamic tooltip from template

		switch (id) {
			case '#tooltip-research':

				return $(`
					<p>You currently researching 6 projects: </p>
					<ul>
						<li>
							<span>Advanced Aircraft Carrier</span>
							<p> => Will be finished in 23/08/1940</p>
						</li>
						<li>
							<span>Early Radar</span>
							<p> => Will be finished in 16/07/1940</p>
						</li>
						<li>
							<span>Atlantic U-Boat</span>
							<p> => Will be finished in 05/01/1941</p>
						</li>
						<li>
							<span>Improved Harbor Construction</span>
							<p> => Will be finished in 08/04/1941</p>
						</li>
						<li>
							<span>Submarine Tactics (II)</span>
							<p> => Will be finished in 11/11/1940</p>
						</li>
						<li>
							<span>Battleship Fire Control (II)</span>
							<p> => Will be finished in 23/09/1940</p>
						</li>
					</ul>
				`);

				break;
		}

	}


	setPosition (e) {

		let pos = {
      x: e.pageX,
      y: e.pageY
    }

		this.$tooltip.css({
			left: pos.x + 18,
			top: pos.y
		});

	}

	show () {

		this.$tooltip.show();

	}

	hide () {

		this.$tooltip.hide();

	}


}
