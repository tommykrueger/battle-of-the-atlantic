
export default class Detail {

  constructor() {

    this.data = {
      units: 0,
      icon: '',
      name: 'testname'
    }

    this.template = ({data}) => {
      return `
        <div class="detail">
          <span class="units">${data.units}</span>
          <span class="icon icon-${data.icon}"></span>
          <span class="name">${data.name}</span>
        </div>
      `
    };

  }

  render () {

    // $('body').append( this.template({data: this.data}) );

  }


  setData (data) {

    this.data = data;
    $('body').find('.detail').html( this.template({data: this.data}) );

  }


  // TODO
  update () {



  }

}
