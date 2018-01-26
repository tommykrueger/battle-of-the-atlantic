export default class Test {


	constructor ( options = {} ) {

    this.options = options;

    // Language testing
    this.testLanguage();
    this.testTranslations();

	}


  testLanguage() {
    // TODO
  }


  testTranslations () {

		App.log(App);

    // simple string
    App.log( App.__('Sun') );

    // String with variable
    App.log( App.__('Today is the %s', [ Date.now() ] ) );

    // String with special chars
    App.log( App.__('The sun is shining; the weather is sweet :)') );

    // Random String non-existing
    App.log( App.__('This translation string does not exist in the translation file.') );

		// translate weekday
		App.log( App.__('Friday') );

  }

}
