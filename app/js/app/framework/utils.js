export var __useDefault = true;


/**
 * Utility class to be used for global functions
 */
export default class Utils {

	constructor() {}


	getParam (param){

   	if (param = (new RegExp('[?&]'+encodeURIComponent(param)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(param[1]);

	}

	isIframe () {

		return !(parent.location == self.location);

	}


	url ( path, cacheBust = false ) {

		if (appConfig.root) {

			let url = appConfig.root + path;

			if (cacheBust)
				return url + '?time=' + Math.random();

			else
				return url;

		}

	}


  debug(txt) {

  	if (window.isDevelopmentMode)
  		console.log(txt);

  }


  // taken from: http://jsfiddle.net/Brfp3/3/
	textCircle (ctx, text, x, y, radius, space, top){
	   space = space || 0;
	   var numRadsPerLetter = (Math.PI - space * 2) / text.length;
	   ctx.save();
	   ctx.translate(x,y);
	   var k = (top) ? 1 : -1;
	   ctx.rotate(-k * ((Math.PI - numRadsPerLetter) / 2 - space));
	   for(var i=0;i<text.length;i++){
	      ctx.save();
	      ctx.rotate(k*i*(numRadsPerLetter));
	      ctx.textAlign = "center";
	     	ctx.textBaseline = (!top) ? "top" : "bottom";
	     	ctx.fillText(text[i],0,-k*(radius));
	      ctx.restore();
	   }
	   ctx.restore();
	}


}
