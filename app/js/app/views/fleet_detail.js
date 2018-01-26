import View from '../framework/view';

import DefaultTemplate from './templates/fleet_detail';

export default class FleetDetail extends View {

  constructor ( options = {} ) {

    super();

    this.template = options.template ? options.template : 'default';
    this.$template = new DefaultTemplate();

    console.log(this.$template);

    this.render();
  }


  render () {

    if (this.template)
      console.log(this.template);

    $('body').append(this.$template);

  }


  setData (data) {

    let template = new Template({
      template: 'tooltipStarTemplate',
      data: data
    });

    this.$template.html( template.render() );

  }


  updatePosition (pos) {

    this.$template.css({
      left: pos.x + 18,
      top: pos.y
    });

  }


  remove (){

    this.$template.remove();

  }

  show () {

    this.$template.show();

  }

  hide () {

    this.$template.hide();

  }


}
