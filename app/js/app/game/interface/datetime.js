
export default class Datetime {

  constructor ( options = {} ) {

    this.game = options.game;
    this.startDate = new Date(this.game.scenario.getStartDate());
    this.currentDate = this.startDate;

    this.oldTime = 0;

    this.weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    this.timeShift = {
      hourly: (60 * 60),
      hourly_quarter: (60 * 60 * 12),
      daily: (60 * 60 * 24)
    }


    this.initControls();

  }


  initControls () {

    $('.datetime').on('click', (e) => {
      e.preventDefault();

      let $btn = $(e.currentTarget);

      this.game.togglePause();
      $btn.toggleClass('datetime-is-paused');

      if ($btn.hasClass('datetime-is-paused')) {
        $btn.addClass('bgBlink');
      }
      else {
        $btn.removeClass('bgBlink');
      }

    });

  }


  render () {

    //if (this.hasChanged()) {

      $('.datetime-weekday').html( this.getWeekday() );
      $('.datetime-date').html( this.getDate() );
      $('.datetime-time').html( this.getTime() + ':00 Uhr' );

    //}

  }


  // elapsedTime since game start in milliseconds
  update ( elapsedTime ) {

    let dt = this.startDate.getTime() + (elapsedTime * this.timeShift.hourly);
    this.currentDate = new Date(dt);

    this.render();

  }


  getCurrentDate () {

    return this.currentDate;

  }


  getWeekday () {

    return App.__( this.weekdays[ this.currentDate.getDay() - 1 ] );

  }

  getDate () {

    this.day = this.formatLeadingZero( this.currentDate.getDate() );
    this.month = this.formatLeadingZero( this.currentDate.getMonth() + 1 );
    this.year = this.currentDate.getFullYear();

    return this.day + '.' + this.month + '.' + this.year;

  }

  getTime () {

    return this.currentDate.getHours();

  }

  // return english format date string
  getDateString () {

    return this.year + '-' + this.month + '-' + this.day;

  }

  hasChanged () {

    if (this.getTime() != this.oldTime) {
      this.oldTime = this.getTime();
      return true;
    }

    return false;

  }

  formatLeadingZero (digit) {

    return (digit < 10) ? '0' + digit : digit;

  }

}
