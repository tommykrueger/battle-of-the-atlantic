
import Component from '../component'


export default class Interaction extends Component {

  constructor ( options = {} ) {

    super(options);
    this.bindKeyboardKeys();

  }


  bindKeyboardKeys () {

    window.addEventListener('keyup', (e) => this.keyUp(e), false);

  }


  keyUp (event) {

    event = event || window.event;

    let keycode = event.keyCode;

    console.log('keyup' + keycode);

    // space bar toggles pause/resume
    if (keycode == 32) {

      this.game.togglePause();

    }

  }

}
