const team = {
    _players : [
      {firstName: 'Rico ', lastName: 'Santana', age: 40},
      {firstName: 'Pablo', lastName: 'Sanchez', age: 43},
      {firstName: 'Jason', lastName: 'Weatherstorm', age: 32}, 
     ],
    _games : [
    {opponent: 'Italy', teamPoints: 39, opponentPoints: 45},
    {opponent: 'France', teamPoints: 38, opponentPoints: 42},
    {opponent: 'Germany', teamPoints: 50, opponentPoints: 32}
    ],
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player  = {firstName: firstName, lastName: lastName, age: age}
    this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      let opp  = {opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints}
      this._games.push(opp);
    }
  }
  
  team.addGame('China', '36', 28);
  team.addGame('Netherlands', '46', 44);
  team.addGame('England', '50', 20);
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team._players);
  console.log(team._games);