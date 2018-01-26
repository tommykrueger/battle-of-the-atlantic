// load framework logic
import Global     from './app/framework/global';
import Language   from './app/framework/language';
import Test       from './app/framework/test';
import Game       from './app/game';

export default class App {


  constructor () {

    this.global = new Global();

    this.init();

  }


  init () {

    console.log('init App');

    // init global framework data
    // this.language = new Language();

    this.test = new Test();

    // load the app specific Game
    this.game = new Game();

  }


};

new App();
