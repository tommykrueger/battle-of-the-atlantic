
import Model from '../framework/model';

import Unit from '../models/unit';
import ProductionItem from '../views/production-item';


// views
import SummaryView from '../views/country/summary';

/*
 * Define the country object skeleton
 */
export default class Country extends Model {


  constructor (options = {}) {

    super(options);

    this.isPlayer = this.get('player') || false;
    this.isAI = false;

    this.productionListViews = [];

    this.merchantMarine = [];

    this.beforeRender();
    this.render();
    this.afterRender();

    if (this.isPlayer) {
      this.renderSummary();
      this.renderProductionList();
    }

  }



  beforeRender () {

    let merchantMarine = this.get('merchant_marine');

    for (var i=0; i<merchantMarine; i++) {

      let cargoType = this.game.config.cargos[this.game.arithmetics.random(0, this.game.config.cargos.length-1)];

      let properties = {
        id: this.game.DATA.units.length,
        name: 'Dauntless',
        type: 'Cargo Ship',
        category: 'merchant',
        country: this.get('id'),
        cargo: {
          type: cargoType,
          amount: this.game.arithmetics.random(2500, 25000)
        },
        grt: (this.game.arithmetics.random(1000, 5000))
      };

      let unit = new Unit({ app: this.app, game: this.game, properties: properties });
      this.merchantMarine.push(unit);
    }

  }


  afterRender() {

    console.log('init country: ', this);

  }


  render() {
    //what ?
  }


  // on every game tick
  update () {

     // calculate the country data
     // .updateSummary()
     if (this.isPlayer) {

       this.updateVictoryProgress();
       this.updateSummary();

     }

     this.updateProduction();

     // .updateResearch();
     // .updateAI();
     // .updateIntelligence(); // optional

  }


  renderSummary () {

    // define the views for the stage
    this.views = {
      summary: new SummaryView({
        app: this.app,
        game: this.game,
        data: {
          id: this.get('id'),
          sunk: {
            grt: 0,
            merchants: 0,
            warships: 0,
          }
        }
      })
    };

  }


  updateVictoryProgress () {

    // console.log( this.get('fleets') );

    let percent = 45;

    let $el = $('.victory-progress-bar-win');
        $el.css('width', percent + '%');

  }


  updateProduction (date) {

    if (this.properties.production == undefined)
      return;

    // check production queue progress
    this.properties.production.forEach((p) => {

       // update the progress
       let date1 = new Date(Date.parse(p.date));
       let dDays = this.daysBetween(date1, this.game.getCurrentDate()) / 24;

       p.percent = (dDays * 100 / p.days);
       // console.log('offset days', dDays, p.percent);
       // update the view of the production

       $('[data-id='+p.id+'] .progress-percent').text( p.percent.toFixed(2) + '%' );
       $('[data-id='+p.id+'] .progress-bar').css( 'width', p.percent.toFixed(2) + '%' );

    });

    if (this.isPlayer) {
      //this.renderProductionList()
    }

  }



  updateSummary () {

    let data = {
      sunk: {
        grt: this.dataFilter.sunkEnemyGRT(),
        merchants: this.dataFilter.sunkEnemyMerchantShips().length,
        warships: this.dataFilter.sunkEnemyWarships(),
      }
    }

    // prepare the data and update the view
    this.views.summary.setData(data);
    this.views.summary.update();

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
