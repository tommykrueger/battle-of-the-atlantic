
// base classes
import Model from '../framework/model';

/**
 * Game Event Class
 *
 */
export default class Event extends Model {


	constructor ( options = {} ) {

    super();

		this.game = options.game;
		this.data = options.data;

    this.render();
    this.initControls();

	}

  render () {

    let data = this.data;

    console.log('display event data in screen', data);

    this.$view = $(`
      <div class="event" data-id="${data.id}">
        <div class="event-header">
          <span class="event-date">- ${data.date}</span>
          <span class="event-overline">Latest News</span>
        </div>
        <div class="event-content">
          <span class="event-title">${data.title}</span>
          <div class="event-text">${data.text}</div>
          <div class="event-actions">
            ${data.actions.map(action => `<button class="button" data-action="${action.action}">${action.name}</button>`)}
          </div>
        </div>
      </div>
    `);

    $('body')
      .find('.event')
      .remove()

    $('body')
      .append(this.$view);

  }

  initControls () {

    //this.$view.find('.btn-close').on('click', (e) => {
      //this.close();
    //});

    this.$view.find('.button').on('click', (e) => {

      let action = $(e.currentTarget).data('action');
      console.log(action);

      if (this[action]) {
        this[action]();
      }

    });

  }

  close () {

    this.$view.remove();
    this.game.togglePause();

  }

}
