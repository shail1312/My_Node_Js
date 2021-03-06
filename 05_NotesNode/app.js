const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title  of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

var argv = yargs
  .command('add','Add a new note',{
    title: titleOptions,
    body: bodyOptions
  })
  .command('list','List of notes')
  .command('read','Read a note',{
    title: titleOptions
  })
  .command('remove','Remove a note',{
    title: titleOptions
  })
  .help()
  .argv;
var command = process.argv[2];

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
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
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
