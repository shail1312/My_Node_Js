console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNum(4,5);

console.log("Result : "+res);

/*
var res = notes.addNote();

console.log(res);
*/

/*
 var user = os.userInfo();

 fs.appendFile('greeting.txt',`Hello ${user.username}! You are ${notes.age}.`);
*/
