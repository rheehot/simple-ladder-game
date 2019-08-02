const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

exports.getPlayerCount = function () {
  return new Promise((resolve, reject) => {
    r.question('몇 명의 인원이 참여하시나요?(숫자만 입력해주세요!) ', answer => {
      if (answer && typeof answer === 'string') {
        answer = parseInt(answer);
        resolve(answer);
        r.close();
      }
      else {
        console.error('인원을 입력해주세요');
        reject();
        r.close();
      }
    });
  });
};

exports.getRandomCount = function (cap = 1) {
  return Math.floor(Math.random() * (cap - 1)) + 1;
};
