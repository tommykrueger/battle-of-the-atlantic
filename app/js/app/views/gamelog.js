
import View from '../framework/view';

export default class GamelogView extends View {

  constructor ( options = {} ) {

    super(options);

    this.data = options.data;
    this.hasChanged = false;


    this.text = {
      sunkreport: '%s sinks %s near %s'
    };

    this.render();

  }


  render() {

    this.template = $(`
      <div class="gamelog" data-id="1" data-model="country">
        <div class="gamelog-content">
          <ol class="gamelog-list">
            <li>
              <span class="gamelog-date">1940-07-10</span>
              <span class="gamelog-text">Germany Defeats France</span>
            </li>
          </ol>
        </div>
      </div>
    `);

    $('body').append(this.template);

  }


  setData ( data = {} ) {

    this.data = data;
    this.hasChanged = true;

  }


  update() {}



  addItem ( type, d ) {

    let data = {
      date: this.game.getCurrentDate(true),
      text: this.getText(type, d)
    }

    let snippet = $(`
      <li>
        <span class="gamelog-date">${data.date}</span>
        <span class="gamelog-text">${data.text}</span>
      </li>
    `);

    this.template.find('.gamelog-list').prepend(snippet);

  }



  getText ( type, replace = [] ) {

    if (replace.length)
      return this.text[type].replace(/%s/g, function() { return replace.shift() })

    return false;

  }



  remove() {

    this.template.remove();

  }

  show() {

    this.template.show();

  }

  hide() {

    this.template.hide();

  }


}
