const calculator = require('./calculator.js');

// calculator.add(parseInt(process.argv[3]),parseInt(process.argv[4]));
// calculator.minus(parseInt(process.argv[3]),parseInt(process.argv[4]));
// calculator.multiply(parseInt(process.argv[3]),parseInt(process.argv[4]));
// calculator.divide(parseInt(process.argv[3]),parseInt(process.argv[4]));

//
var key = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

calculator[key](num1,num2);

// console.log(calculator.add(1,2));
