const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  try{
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
      //console.log(e);
  }

  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    console.log("Successfully saved");
  } else{
    console.log("Already exists");
  }
};

var getAll = () =>{
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note',title);
}

var removeNote = (title) => {
  console.log('Removing note',title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
