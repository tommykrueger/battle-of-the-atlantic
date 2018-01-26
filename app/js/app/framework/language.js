import Config from '../config/config';

/**
 * Language class handles translations
 */
export default class Language {


	constructor ( options = {} ) {

		this.config = new Config();

    this.locale = this.config.language.default;
    this.translations = App.translations;

    this.loadTranslationFile();

	}


  loadTranslationFile () {

    if (this.locale) {
			console.log('active language: ' + this.locale);
    }

  }

  detectLanguage () {

  }

  switchLanguage () {

  }

  getLanguage () {

  }

  setLanguage () {

  }


  static translate (key, replace = [], $locale = 'en') {

		let translatedString = key;

		if ( App.translations[key] )
			translatedString = App.translations[key];

		if (replace.length > 0)
			return translatedString.replace(/%s/g, function() { return replace.shift()})

    return translatedString;

  }

}
