export var __useDefault = true;

export default class Logger {

  init () {}

  static log (message) {
    this.print(message, 'info');
  }

  info (message) {
  	this.print(message, 'info');
  }

  error (message) {
		this.print(message, 'error');
  }

  static print (message, type = 'info') {
  	if (typeof(console) === 'object' && window.console.log) {
  		console.log(message);
  	}
  }
}
