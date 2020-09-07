const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'John',
      lastName: 'Smitt',
      age: 17
    },
    {
      firstName: 'Frank',
      lastName: 'Desiree',
      age: 8
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Cowboys',
      teamPoints: 12,
      opponentPoints: 57
    },
    {
      opponent: 'Seahawks',
      teamPoints: 30,
      opponentPoints: 16
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {firstName: firstName, lastName: lastName, age: age};
    this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {opponent: opponentName, teamPoints: teamPoints, opponentPoints: opponentPoints};
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Eagles', 40, 65);
console.log(team._games);
