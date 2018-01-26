
export default class Modal {

  constructor() {

    this.$element = $('.modal');
    this.initEvents();
  }

  render () {

    // $('body').append( this.template({data: this.data}) );

  }


  initEvents() {


    $('.modal-button-close').on('click', (e) => {
      e.preventDefault();
      this.$element.css('display', 'none');
    });

  }


  hideAll () {

    this.$element.css('display', 'none');

  }


  hide () {

    this.$element.css('display', 'none');

  }

  show (modalInstance) {

    if (modalInstance)
      $(modalInstance).css('display', 'block');

    // this.$element.css('display', 'block');

  }


  update () {
    
  }


}
