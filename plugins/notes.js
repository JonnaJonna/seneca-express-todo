const notesData = require("../data/notes");
module.exports = function notes(options) {
  //get all notes
  this.add("role:notes,cmd:all", getNotes);
  //get note by id
  this.add("role:notes,cmd:byId", getNotesById);
};

function getNotes(msg, respond) {
  respond(null, { notesData });
}

function getNotesById(msg, respond) {
  const notes = notesData.filter(note => note.id === parseInt(msg.id)); //filter notes by id
  respond(null, { notes });
}

//notes plugin
