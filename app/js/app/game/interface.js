
import Datetime from './interface/datetime'
import Detail from './interface/detail'
import Menu from './interface/menu'
import Modal from './interface/modal'
import Tabs from './interface/tabs'


/**
 * The main interface manager handles components
 * of the user interface.
 * The user interface is rendered as html on top of the game map
 *
 * Components:
 * - Modal
 * - Search
 * - Detail (Units, Fleet)
 * - Economy
 * - Production
 * - Research
 * - CombatView
 * - Places (the cities you are owning)
 * - Air Fields / Harbors
 * - Settings
 * - Statistics (Country)
 * - ...
 */
export default class Interface {

  constructor(options = {}) {

    this.game = options.game;

    this.components = {
      datetime: new Datetime({game: this.game}),
      detail: new Detail(),
      menu: new Menu({game: this}),
      modal: new Modal(),
      tabs: new Tabs()
    };

    this.render();

  }

  render () {

    Object.keys(this.components).forEach( (component) => {
      this.components[component].render();
    });

  }

  update ( elapsedTime ) {

    Object.keys(this.components).forEach( (component) => {
      this.components[component].update(elapsedTime);
    });

  }

}
