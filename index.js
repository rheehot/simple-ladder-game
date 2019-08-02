(async function () {
  const { getPlayerCount } = require('./utils');
  const { LADDER_DEPTH } = require('./constants');

  const Ladder = require('./lib/Ladder');
  const Player = require('./lib/Player');
  const playerCount = await getPlayerCount();

  const ladder = new Ladder(playerCount, LADDER_DEPTH);
  for (let i = 0; i < playerCount; i++) {
    const player = new Player(`Player_${i}`, i);
    ladder.addPlayer(player);
  }

  ladder.start();
})();
