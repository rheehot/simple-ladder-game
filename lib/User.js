class User {
  constructor (name = 'anonymous', startPosition = 0) {
    this.name = name;
    this.startPosition = [0, startPosition];
  }
}

module.exports = User;
