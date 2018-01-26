export default class Stats {


	constructor ( options = {} ) {

    this.frame = 0;
    this.beginTime = Date.now();
    this.prevTime = this.beginTime;

	}


  start () {

    this.beginTime = Date.now();

  }



	end () {

    this.frames++;

		let time = Date.now();

    if ( time >= this.prevTime + 1000 ) {

			let r = ( this.frames * 1000 ) / ( time - this.prevTime );

			this.prevTime = time;
			this.frames = 0;

      if (r)
        console.log(r.toFixed(2));
		}

  }

}
