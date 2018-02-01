export default class Paths {

  constructor ( options = {} ) {

    this.app = options.app;
    this.game = options.game;

    this._paths = [];

    // Node struct
    this.path = {
      id: 1,
      a: 1,     // startNode
      b: 2,     // endNode
      d: 323,   // distance in km
    }
  }

  addPath ( startNode, endNode ) {

    let nextID = this._paths.length + 1;
    let newPath = Object.assign({}, this.path);

    newPath.id = nextID;
    newPath.a = startNode.id;
    newPath.b = endNode.id;
    newPath.d = this.game.components.map.distanceBetween(startNode.latlon, endNode.latlon);

    this._paths.push(newPath);

    console.log(this._paths);

  }

  getPaths () {

    return this._paths;

  }


}
