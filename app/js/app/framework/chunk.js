import Arithmetics from '../framework/arithmetics';

export default class Chunk {


  constructor(options = {}) {

    this.arithmetics = new Arithmetics();

    this.chunkSize = options.chunkSize || 60/4; // 60fps by 4 desired => 15
    this.itemSize = 1000; // 1000 entries per chunk
    this.chunks = [];

    this.currentChunk = 0;

    this.prepareDataset();

  }


  prepareDataset () {

    for (var i=0; i<this.chunkSize; i++) {
      this.chunks.push(new Array(this.itemSize));
    }

  }

  /*
   * adds a new item to the next available chunk
   */
  add (item) {

    for (var i=0; i<this.chunks.length; i++) {
      this.chunks[this.arithmetics.random(0, this.chunks.length-1)].push(item);
    }

  }


  update () {

    if (this.currentChunk >= this.chunks.length-1) {
      this.currentChunk = 0;
    } else {
      this.currentChunk++;
    }

    this.chunks[this.currentChunk].forEach((item) => {
      item.update();
    });

    console.log(this.chunks[0].length);

  }


}
