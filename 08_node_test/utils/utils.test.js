const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(11, 22);

  expect(res).toBe(33).toBeA('number');
});

it('should square number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

//should verify first and lastName and set
// assert it include firstName and lastName with proper values

it('should set firstName and lastName', () => {
  var user = {location: 'India', age: 23};
  var res = utils.setName(user, 'Shailesh Pandey');

  expect(res).toInclude({
    firstName: 'Shailesh',
    lastName: 'Pandey'
  });

});
