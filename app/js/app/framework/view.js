export var __useDefault = true;

import Utils from './utils';

//import Template from '../views/template';

/**
 * View base class
 * Used for all DOM - related objects
 *
 */

export default class View {

	constructor ( options = {} ) {

		this.app = options.app;
		this.game = options.game;

		this.utils = new Utils();

		this.name = '';
		this.$view = ``;

	}

	setData() {

	}

	render() {

		this.$el = this.$view;
		return this.$el;

	}

	getHtml() {

		return this.$el.html();

	}


	remove () {

    this.$template.remove();

  }


	appendTo( $element ) {



	}

}
