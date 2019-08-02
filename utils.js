const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function singleQuestion (question, errorMsg = 'Readline error') {
  return new Promise((resolve, reject) => {
    r.question(`${question} `, answer => {
      if (answer && typeof answer === 'string') {
        resolve(answer);
      }
      else {
        reject(errorMsg);
      }
      r.close();
    });
  });
}

exports.getPlayerCount = async function () {
  try {
    const playerCount = await singleQuestion('몇 명의 인원이 참여하시나요?(숫자만 입력해주세요!)');
    return parseInt(playerCount);
  }
  catch (e) {
    throw new Error(e);
  }
};

exports.getPlayerNames = function (playerCount) {
  try {
    
  }
  catch (e) {
    throw new Error(e);
  }
}

exports.getRandomCount = function (cap = 1) {
  return Math.floor(Math.random() * (cap - 1)) + 1;
};
