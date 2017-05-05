const _ = require('lodash');

/*
console.log(_.isString(true));
console.log(_.isString('Shailesh'));
*/

var filteredArray = _.uniq(['Shailesh',1,'Shailesh',1,2,3,4]);
console.log(filteredArray);
