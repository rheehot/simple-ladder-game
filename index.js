(async function () {
  const { getPlayerCount } = require('./utils');
  const { LADDER_DEPTH } = require('./constants');

  const Ladder = require('./lib/Ladder');
  const User = require('./lib/User');
  const playerCount = await getPlayerCount();

  const ladder = new Ladder(playerCount, LADDER_DEPTH);
  ladder.generate();
  
  const users = [];
  for (let i = 0; i < PLAYER_COUNT; i++) {
    const user = new User(`Player_${i}`, i);
    users.push(user);
  }

  
})();
