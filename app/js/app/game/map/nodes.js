export default class Nodes {

  constructor ( options = {} ) {

    this.app = options.app;
    this.game = options.game;

    this._nodes = [];

    // Node struct
    this.node = {
      id: 1,
      latlon: [3.43, 53],
      type: 1, // 1=sea, 2=land
    }

  }


  addNode ( latlon, type = 1 ) {

    let nextID = this._nodes.length + 1;
    let newNode = Object.assign({}, this.node);

    newNode.id = nextID;
    newNode.latlon = latlon;
    newNode.type = type;

    this._nodes.push(newNode);

    return newNode;

  }

  getNodes () {

    return this._nodes;

  }


}
