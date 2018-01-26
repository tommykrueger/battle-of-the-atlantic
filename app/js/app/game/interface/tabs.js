
export default class Tabs {

  constructor() {

    this.activeTabClass = 'tab-active';
    this.activeTabNavItemClass = 'tabs-nav-item-is-active';

    this.initEvents();

    /*
    this.template = ({data}) => {
      return `
        <div class="detail">
          <span class="units">${data.units}</span>
          <span class="icon icon-${data.icon}"></span>
          <span class="name">${data.name}</span>
        </div>
      `
    };
    */

  }

  render () {

    // $('body').append( this.template({data: this.data}) );

  }


  initEvents() {


    $('[data-component="tabs"]').find('[data-tab]').on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      let $tabNavItem = $(e.currentTarget);
      let tabID = $tabNavItem.data('tab');

      console.log(tabID);

      $tabNavItem.closest('[data-component="tabs"]').find('[data-tab]').removeClass(this.activeTabNavItemClass);
      $tabNavItem.closest('[data-component="tabs"]').find('.tab').removeClass(this.activeTabClass);

      $(e.currentTarget).addClass(this.activeTabNavItemClass);
      $tabNavItem.closest('[data-component="tabs"]').find(tabID).addClass(this.activeTabClass);

    });

  }


  update () {

  }


}
