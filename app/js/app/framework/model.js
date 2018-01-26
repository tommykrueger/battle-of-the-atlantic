import Logger from './logger';
import Utils from './utils';

export default class Model {


	constructor ( options = {} ) {

    this.app 		= options.app;
		this.game 	= options.game;

    this.logger = new Logger();
    this.utils 	= new Utils();

		this.properties = options.properties;

	}

	// Retrieve a certain property of this model
	get (property) {

		return this.properties[property];

	}

	// Set a variable to a private property
	set (property, data) {

		(this.properties[property] != undefined) ? this.properties[property] = data : false;

	}


  save() {

    //App.log('saving data', this.data);
		//this.loadAsync(this.url, this.data);

  }


	setPosition (pos = {x:0, y:0}) {

		this.set('position', pos);

	}


	getPosition () {

		return this.get('position');

	}



	loadAsync(url, data = {}, method = 'post', callback = {}, scope = this) {

    $.ajax({

      url: url,
      data: data,
      dataType: 'json',
      type: method,
      success: response => {

        if (response) {

					console.log(response);

          if (typeof(callback) == 'function') {

              callback.call(scope, response);

          }

        }

			}
    });

  }

}
