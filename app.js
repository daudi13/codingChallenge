const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
};


// create one player array for each team (variables 'players1' and 'players2')

const [player1, player2] = game.players

console.log(player1, player2);

//the first player in any player array is the goalkeeper and the others are field players. For Bayern Muncih(team 1) create one variable('gk') with the goalkeeper's name and one array, and one array('fieldPlayers) with all the remaining 10 field players


const [gk, ...fieldPlayers] = player1;

console.log(gk, fieldPlayers);


//create an array 'all players' containing all players of both teams (22 players) 

const allPlayers = [...player1, ...player2];

console.log(allPlayers);

//during the game, Bayern Muncih(team 1) used 3 subtitute aplayers. so create a new array('players1Final')containing all the original team1 layers plus 'thiago', 'coutinho' and 'perisic'


const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...player1];

console.log(players1Final)


//based on the game.odds object, create one varibale for each odd(called 'team1', 'draw' and 'team2')

const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

//write a function(printGoals) that receives an arbitrary number of players anames(not an array) and prints each of them to the consoke, along with the number of goals that were scored in total(number of player names passed in)

const printGoals = function (...players) {
    console.log(`${players.length} is the number of goals that were scored by ${players}`)
}

printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');

// the team with the lower odd is more likely to win. print to the console which team is more likely to win, without using an if/ else statement or the ternary operator


team1 < team2 && console.log('team 1 is more likely to win the match');

team2 < team1 && console.log('team 2 is more likely to win the match')