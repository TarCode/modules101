var readlineSync = require('readline-sync');
var chalk = require('chalk');

var ranNum = Math.round((Math.random()*10) + 1);
var userNum = readlineSync.question("Guess the number between 0 and 100: ");
var tries = 0;

while(userNum != ranNum){
	
	if(userNum < ranNum){
		console.log(chalk.yellow("Too low."));
		tries++;
		userNum = readlineSync.question("Guess again: ");
	}
	else{
		console.log(chalk.red("Too high."));
		tries++;
		userNum = readlineSync.question("Guess again: ");
	}
}
if(userNum == ranNum){
		console.log(chalk.green("Yeah the correct number is " + ranNum + ". It took you " + tries + " tries."));
	}
