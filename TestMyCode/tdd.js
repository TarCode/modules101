var chalk = require('chalk');
var count = 0;
var pass = 0;			
	var assert = {

			equals : function(exRes, result, funcName){

				
	 			if(exRes === result){
					pass++;
					console.log(chalk.green("Passed"));
				}
				else{
					console.log(chalk.red("Failed"));
				}
				count++;
	 			
				
			}
	}
				
		



	exports.run = function(name, testPar){
			this.name = name;
			testPar(assert);
			
		}

	

exports.passed = function(){

	console.log("Number of tests passed: " + pass + " out of " + assert.count);

}
