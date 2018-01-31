
export default class Detail {

  constructor (options = {}) {

    this.app = options.app;
    this.game = options.game;

    this.data = {
      units: 0,
      icon: '',
      name: 'testname',
      missions: []
    }

    this.template = ({data}) => {
      return `
        <div class="detail" data-id="${data.id}">
          <span class="icon icon-${data.icon}">
            <img src="./img/units/cruiser.png" />
          </span>
          <span class="name">${data.name}</span>
          <div class="object-missions">
            <select id="missions">
              ${data.missions.map(mission => `<option class="${mission}">${mission}</option>`).join('')}
            </select>
          </div>
          <span class="units">
            ${data.units.map(unit => `<span class="m">${unit.name}</span>`).join('')}
          </span>
        </div>
      `
    };

  }

  render () {

    // $('body').append( this.template({data: this.data}) );

  }


  setData (data) {

    this.data = data;
    this.data.missions = this.game.config.missions;

    console.log(this.data.missions);

    $('body').find('.detail').remove();
    $('body').append( this.template({data: this.data}) );

  }


  // TODO
  update () {



  }

}
