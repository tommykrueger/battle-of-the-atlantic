import View from '../framework/view';

// import all available templates
/*import {

  unit

} from './templates/tooltip'
*/

export default class Tooltip extends View {

  constructor ( options = {} ) {

    super();
    this.game = options.game;
    this.data = options.data;


    this.t = $(`
      <div class="tooltip" data-template="tooltip-unit">

        <span class="tooltip-name" data-name="">${this.data.name}</span>

        <ul class="tooltip-properties">

          <li class="tooltip-property" data-property="tonnage"></li>
          <li class="tooltip-property" data-property="sailors"></li>

          <li class="tooltip-property" data-property="sea_attack"></li>
          <li class="tooltip-property" data-property="air_attack"></li>
          <li class="tooltip-property" data-property="sub_attack"></li>

          <li class="tooltip-property" data-property="sea_attack"></li>
          <li class="tooltip-property" data-property="air_attack"></li>
          <li class="tooltip-property" data-property="sub_attack"></li>

        </ul>

      </div>
    `);

  }


  setTemplate () {

    let template = this.$el.data('action');
    this.$template = $('[data-template="'+ template +'"]');

  }

  setData () {

    let model = this.$el.data('model');
    let id = this.$el.data('id');

    let data = this.game.getDataFromModel(model, id);
        data = data[0];

    console.log('set tooltip', data);
    console.log(this.t);

  }


  setPosition (e) {

    let pos = {
      x: e.pageX,
      y: e.pageY
    }

    this.$template.css({
      left: pos.x + 18,
      top: pos.y
    });

  }


  remove (){

    this.$template.remove();

  }

  show (e) {

    this.$template.show();

  }

  hide (e) {

    this.$template.hide();

  }


}
