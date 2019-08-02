(async function () {
  const { getPlayerCount, getPlayerNames, getResults } = require('./utils');
  const { LADDER_DEPTH } = require('./constants');

  const Ladder = require('./lib/Ladder');
  const Player = require('./lib/Player');

  let playerCount = 0;
  let playerNames = {};
  let results = {};
  try {
    playerCount = await getPlayerCount();
    playerNames = await getPlayerNames(playerCount);
    results = await getResults(playerCount);
  }
  catch (e) {
    console.error('\n와장창... 사다리가 부숴졌습니다');
    return;
  }

  const ladder = new Ladder(playerCount, LADDER_DEPTH);
  ladder.setResults(results);
  
  for (let i = 0; i < playerCount; i++) {
    const name = playerNames[i + 1];
    const player = new Player(name || `Player ${i}`, i);
    ladder.addPlayer(player);
  }

  ladder.start();
})();
