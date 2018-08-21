var fs = require('fs');
var ohm = require('ohm-js');
var contents = fs.readFileSync('./myGrammar.ohm');
var myGrammar = ohm.grammar(contents);

var userInput = 'Hello';
var m = myGrammar.trace(userInput);
/**
if (m.succeeded()) {
  console.log('Greetings, human.');
} else {
  console.log("That's not a greeting!");
}
**/
console.log(m.toString());


