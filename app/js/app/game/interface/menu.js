
export default class Menu {

  constructor ( options = {} ) {

    this.game = options.game;

    this.$element = $('.menu');
    this.initEvents();

  }

  render () {

    // $('body').append( this.template({data: this.data}) );

  }


  initEvents() {


    this.$element.find('.menu-nav-list-item[data-target]').on('click', (e) => {

      e.preventDefault();
      this.game.components.modal.hideAll();
      this.game.components.modal.show( $(e.currentTarget).data('target') );

      this.$element.find('.menu-nav-list-item[data-target]').removeClass('is-active');
      $(e.currentTarget).addClass('is-active');

    });

  }


  update () {
    
  }


}
