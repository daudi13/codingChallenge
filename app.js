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
    printGoal: function (noOfPlayers, goals) {
        const noOfGoals = goals.length
    console.log(noOfPlayers, noOfGoals)
}
};

//create one player array for each team (varibales 'players' and players2)

const [player1, player2] = [...game.players]

//for Bayern Munich(team1) create one varibale ('gk') with the goalkeeper's name, and one array('fieldPlayer') with all the remaining 10 field players

const [gk, ...fieldPlayer] = player1;

console.log(gk);
console.log(fieldPlayer);

//create an array 'allPlayers' containign all players pf both teams

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//during the game, Bayern Munich(team 1) used 3 subtitute players. so create a new array('playersFinal') containing all the original team 1 players plus 'Thiago' 'Coutinho' and 'Perisic'

game.subtitutes = ['Thiago', 'Coutinho', 'Persic'];
const playersFinal = [...player1, ...game.subtitutes];
console.log(playersFinal);

//based on the game.odds object, create one varibale for each odd(called 'team1', 'draw', and 'team2')

const {team1, x:draw , team2} = game.odds;

console.log(team1);
console.log(draw);
console.log(team2);

//write a function('printGoal') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total(number of players names passed in)


const printfunc = game.printGoal(...player1, game.scored)
console.log(printfunc);


//the team with the lower odd is more likely to win. Print to the console which team is more likely to win, without an if?else statement or the ternary operator

console.log(team1 > team2 || team2 > team1)