const { getRandomCount } = require('../utils');

class Ladder {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.ladder = [];
    this.players = [];
    this.results = {};

    this._generate();
  }

  _generate () {
    const ladder = this.ladder;
    for (let i = 0; i < this.height; i++) {
      ladder[i] = [];
      for (let j = 0; j < this.width; j++) {
        ladder[i][j] = 0;
      }
    }
    
    for (let i = 0; i < this.width; i++) {
      const column = getRandomCount(this.width);
      const row = getRandomCount(this.height);
  
      if (ladder[row][column] === 0 && ladder[row][column + 1] === 0) {
        ladder[row][column] = 1;
        ladder[row][column + 1] = 2;
      }
    }

    this.ladder = ladder;
  }

  _printLadder () {
    let ladderString = '';
    this.ladder.forEach(row => {
      ladderString += '\n';
      row.forEach(column => {
        if (column === 0) {
          ladderString += '|';
        }
        else {
          ladderString += '-';
        }
      });
    });

    // console.log(ladderString);
    console.log(this.ladder);
  }

  _getPlayerResult (player) {
    const ladder = this.ladder;
    let row = player.startPosition[0];
    let column = player.startPosition[1];

    while (row < this.ladder.length) {
      const currentPoint = ladder[row][column];
      if (currentPoint === 1) {
        column++;
      }
      else if (currentPoint === 2) {
        column--;
      }
      row++;
    }

    return [row, column];
  }

  setResults (results) {
    this.results = results;
  }

  getLadder () {
    return this.ladder;
  }

  getPlayers () {
    return this.players;
  }

  addPlayer (player) {
    this.players.push(player);
  }

  start () {
    if (this.players.length === 0) {
      throw new Error('플레이어를 사다리에 먼저 등록하세요!');
    }

    this._printLadder();

    this.players.forEach(player => {
      const lastPosition = this._getPlayerResult(player);
      const result = this.results[lastPosition[1] + 1];
      console.log(`${player.name} 플레이어의 결과는 ${result}!`);
    });
  }
}

module.exports = Ladder;
