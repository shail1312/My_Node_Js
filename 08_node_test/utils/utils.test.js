const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(11, 22);

  if(res !== 33) {
    throw new Error(`Expected 33 but value is ${res}.`);
  }
});

it('should square number', () => {
  var res = utils.square(3);

  if(res !== 9) {
    throw new Error(`Expected 9 but value is ${res}.`);
  }
});
