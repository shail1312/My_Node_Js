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
    notes.logNote(note);
  }else {
    console.log('Note Already stored');
  }
} else if(command == 'list'){
  notes.getAll();
} else if (command == 'read') {
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command == 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not reconized');
}
