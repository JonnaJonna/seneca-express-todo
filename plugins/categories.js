const categoriesData = require("../data/categories");
const notesData = require("../data/notes");
module.exports = function categories(options) {
  //get all categories
  this.add("role:categories,cmd:all", getCategories);
  //get notes by category
  this.add("role:categories,cmd:byId", getNotesById);
};

function getCategories(msg, respond) {
  respond(null, { categoriesData });
}
// SenecaWeb will provide information
// about the request to msg.args, it can be body, query or params, in this case id
function getNotesById(msg, respond) {
  console.log(msg.id);
  const notes = notesData.filter(note => note.categoryId === parseInt(msg.id)); //filter notes by categoryid
  respond(null, { notes });
}

//categories plugin
