// import Config     from '../config/config';
import Language   from './language';
import Logger     from './logger';

// es6 modules do not allow to add functions to the global object scope
// instead use the global object "App" to add the global function
// within the whole application you can use App.<func_name>
export default class Global {

  constructor () {

    App.__ = function ($string, $replace, $locale) {
      return Language.translate($string, $replace, $locale);
    }

    App.log = function ($string) {
      return Logger.log($string);
    }

    // TODO add more global functions here

  }

}
