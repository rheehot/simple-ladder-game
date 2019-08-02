const prompt = require('prompt');
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

function multipleQuestion (questions) {
  return new Promise((resolve, reject) => {
    prompt.start();
    prompt.get(questions, (err, results) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(results);
      }
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
}

exports.getPlayerNames = function (playerCount) {
  const playerNames = [];
  for (let i = 0; i < playerCount; i++) {
    playerNames.push({
      required: true,
      name: i + 1,
      description: `${i + 1}번 플레이어의 이름을 입력해주세요`,
    });
  }
  
  try {
    return multipleQuestion(playerNames)
  }
  catch (e) {
    throw new Error(e);
  }
}

exports.getResults = function (playerCount) {
  const results = [];
  for (let i = 0; i < playerCount; i++) {
    results.push({
      required: true,
      name: i + 1,
      description: `${i + 1}번째 결과의 이름은 무엇인가요?`,
    });
  }

  try {
    return multipleQuestion(results);;
  }
  catch (e) {
    throw new Error(e);
  }
}

exports.getRandomCount = function (cap = 1) {
  return Math.floor(Math.random() * (cap - 1)) + 1;
}
