
import Model from '../framework/model';

import ProductionItem from '../views/production-item';

/*
 * Define the country object skeleton
 */
export default class Country extends Model {


  constructor (options = {}) {

    super(options);

    console.log('init country: ', this.properties);

    this.isPlayer = this.properties.player || false;
    this.isAI = false;

    this.productionListViews = [];

    if (this.isPlayer) {
      this.renderSummary();
      this.renderProductionList();
    }

  }


  update () {

     // calculate the country data
     // .updateSummary()
     // .updateVictoryProgress();
     this.updateProduction();
     // .updateResearch();
     // .updateAI();
     // .updateIntelligence(); // optionale

  }


  renderSummary () {}



  updateProduction (date) {

    if (this.properties.production == undefined)
      return

    // check production queue progress
    this.properties.production.forEach((p) => {

       // update the progress
       let date1 = new Date(Date.parse(p.date));
       let dDays = this.daysBetween(date1, this.game.getCurrentDate()) / 24;

       p.percent = (dDays * 100 / p.days);
       console.log('offset days', dDays, p.percent);
       // update the view of the production

       $('[data-id='+p.id+'] .progress-percent').text( p.percent.toFixed(2) + '%' );
       $('[data-id='+p.id+'] .progress-bar').css( 'width', p.percent.toFixed(2) + '%' );

    });

    if (this.isPlayer) {
      //this.renderProductionList()
    }

  }


  renderProductionList () {

    if (this.properties.production == undefined)
      return

    this.properties.production.forEach((p) => {

      this.productionListViews.push(
        new ProductionItem({
          data: p,
          date: this.game.getCurrentDate()
        })
      );

    });

  }



  daysBetween (date1, date2) {

    var ndays;
    var tv1 = date1.getTime();  // msec since 1970
    var tv2 = date2.getTime();

    ndays = (tv2 - tv1) / 1000 / 86400 * 24;
    ndays = Math.round(ndays - 0.5);
    return ndays;

  }



  getCapital () {

    return this.capital;

  }

}
