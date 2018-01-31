import View from '../framework/view';

export default class ProductionItem extends View {

  constructor ( options = {} ) {

    super(options);
    this.data = options.data;
    this.scenarioDate = options.date;
    this.render();

  }


  render () {

    let data = this.data;

    this.template = $(`
      <li class="production-list-item type-${data.group}" data-id="${data.id}">

      <span class="unit-image"></span>
      <span class="unit-name">
        <span class="unit-name">${data.name}</span>
        <span class="unit-type">${data.type}</span>
        <span class="unit-class">Type: ${data.class}</span>
      </span>

      <span class="progress progress-production">
        <span class="progress-bar" style="width: ${data.progress}%"></span>
        <span class="progress-percent">${data.progress}%</span>
      </span>

      <span class="production-cost">
        <span class="production-cost-value">Cost: ${data.cost}</span>/day
        <span class="production-time">next ready at: 24/08/1941</span>
      </span>

      <span class="production-series">${data.series}</span>
      <span class="production-step">${data.step}</span>

      <span class="production-controls">
        <span class="production-minus">-</span>
        <span class="production-plus">+</span>
      </span>
      <span class="btn-delete">&times;</span>

    </li>
    `);

    $('.production-list').append(this.template);

  }


  setData (data) {}


  update (data) {

    let date1 = new Date(this.data.start_date);
    let date2 = this.scenarioDate;
    let dDays = thsi.daysBetween(date1, date2);

    console.log(dDays);

    let w = (dDay * 100 / this.data.days);
    this.template.find('.progress-bar').css('width', w);

  }


  remove (){

    this.template.remove();

  }

}
