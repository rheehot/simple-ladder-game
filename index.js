(async function () {
  const { getPlayerCount, getPlayerNames } = require('./utils');
  const { LADDER_DEPTH } = require('./constants');

  const Ladder = require('./lib/Ladder');
  const Player = require('./lib/Player');

  let playerCount = 0;
  let playerNames = {};
  try {
    playerCount = await getPlayerCount();
    playerNames = await getPlayerNames(playerCount);
  }
  catch (e) {
    console.error('\n와장창... 사다리가 부숴졌습니다');
    return;
  }

  const ladder = new Ladder(playerCount, LADDER_DEPTH);
  for (let i = 0; i < playerCount; i++) {
    const name = playerNames[i + 1];
    const player = new Player(name || `Player ${i}`, i);
    ladder.addPlayer(player);
  }

  ladder.start();
})();
