const { getRandomCount } = require('../utils');

class Ladder {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.ladder = [];
  }

  generate () {
    const ladder = this.ladder;
    for (let i = 0; i < this.height; i++) {
      ladder[i] = [];
      for (let j = 0; j < this.width; j++) {
        ladder[i][j] = 0;
      }
    }
  
    for (let i = 0; i < this.width; i++) {
      const y = getRandomCount(this.width);
      const x = getRandomCount(this.height);
  
      if (ladder[x][y] === 0 && ladder[x][y + 1] === 0) {
        ladder[x][y] = 1;
        ladder[x][y + 1] = 1;
      }
    }

    this.ladder = ladder;
  }

  getLadder () {
    return this.ladder;
  }
}

module.exports = Ladder;
