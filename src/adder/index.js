const ohm = require('ohm-js');

ohm.grammar(`
  Arithmetic {
    Exp = "42"
  }
`);

let matchResult = ohm.match('42');
matchResult.sucedded();


