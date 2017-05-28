const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

it('should add two numbers', () => {
  var res = utils.add(11, 22);

  expect(res).toBe(33).toBeA('number');
});

it('should async add two number', (done) => {
  utils.asyncAdd(4, 5 , (sum) => {
    expect(sum).toBe(9).toBeA('number');
    done();
  });
});

var res = utils.square(3);

it('should async square', (done) => {
  utils.asyncSquare(4, (square) => {
    expect(square).toBe(16).toBeA('number');
    done();
  });
});

it('should square number', () => {

  expect(res).toBe(9).toBeA('number');
});

//should verify first and lastName and set
// assert it include firstName and lastName with proper values

});

it('should set firstName and lastName', () => {
  var user = {location: 'India', age: 23};
  var res = utils.setName(user, 'Shailesh Pandey');

  expect(res).toInclude({
    firstName: 'Shailesh',
    lastName: 'Pandey'
  });

});
