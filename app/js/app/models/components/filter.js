
/**
 * Predefined filter sets to use for data extraction
 * This one reads data only but does NOT change it.
 */
export default class Filter {

  constructor (options = {}) {

    this.app 		= options.app;
    this.game 	= options.game;

    this.DATA = this.game.DATA;

  }


  getRandomUnitName (unitType, country = 'PLAYER') {

    if (country == 'PLAYER') {

    }

    return name;

  }


  sunkEnemyMerchantShips ( country = 'de' ) {

    let data = this.DATA.sunk.filter((a) => (a.category == 'merchant') && (a.sunk_by_country == 'de'));
    return data;

  }

  sunkEnemyWarships ( country = 'de' ) {

    let data = this.DATA.sunk.filter((a) => (a.category != 'merchant') && (a.sunk_by_country == country));
    return data.length;

  }

  sunkEnemyGRT ( country = 'de' ) {
    let data = this.sunkEnemyMerchantShips(country);

    if (data.length) {
      return data.map(a => a.grt).reduce((a, b) => { return a + b });
    }

    return 0;

  }

}
