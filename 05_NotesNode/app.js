console.log('this is app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ',command);
console.log('Yargs : ',yargs.argv);
if(command == 'add'){
  //node app.js add --title=Secret --body="This is my secret"
  var note = notes.addNote(argv.title,argv.body);
  if(note) {
    console.log('Note created');
    console.log('__');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }else {
    console.log('Note Already stored');
  }
} else if(command == 'list'){
  notes.getAll();
} else if (command == 'read') {
  notes.getNote(argv.title);
} else if (command == 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not reconized');
}
