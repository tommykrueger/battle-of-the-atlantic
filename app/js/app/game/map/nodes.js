export default class Nodes {

  constructor ( options = {} ) {

    this.app = options.app;
    this.game = options.game;

    this._nodes = [
      {
        "id": 1,
        "latlon": [
          54.212392120753684,
          7.792226013779197
        ],
        "type": 1
      },
      {
        "id": 2,
        "latlon": [
          54.24588408721513,
          5.672282171795151
        ],
        "type": 1
      },
      {
        "id": 3,
        "latlon": [
          53.53683123042619,
          3.953408786402681
        ],
        "type": 1
      },
      {
        "id": 4,
        "latlon": [
          52.22302392591957,
          2.8647889756541165
        ],
        "type": 1
      },
      {
        "id": 5,
        "latlon": [
          50.43323357290548,
          0.9167324722093172
        ],
        "type": 1
      },
      {
        "id": 6,
        "latlon": [
          50.10362849060927,
          -1.0313240312354817
        ],
        "type": 1
      },
      {
        "id": 7,
        "latlon": [
          49.993252867461635,
          -3.036676314193363
        ],
        "type": 1
      },
      {
        "id": 8,
        "latlon": [
          49.17606211488799,
          -4.927437038125079
        ],
        "type": 1
      }
    ];

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

    console.log(this._nodes);

  }

  getNodes () {

    return this._nodes;

  }

}
