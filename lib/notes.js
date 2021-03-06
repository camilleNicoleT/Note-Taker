const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
           
     if (query.title) {
       filteredResults = filteredResults.filter(note => note.title === query.title);
     }
     if (query.text) {
       filteredResults = filteredResults.filter(note => note.text === query.text);
     }
     return filteredResults;
   }
 
 function findById(id, notesArray) {
     const result = notesArray.filter(notes => notes.id === id)[0];
     return result;
   }
   
 function createNewNote(body, notesArray) {
     const note = body;
   
   notesArray.push(note);

     fs.writeFileSync(
       path.join(__dirname, '../db/db.json'),
       JSON.stringify({notes:notesArray }, null, 2)
     );
        return note;
       }

 function deleteNote(notes, id) {
      let ID = parseInt(id);
      notes.splice(ID, 1);

      for(let i =ID; i < notes.length; i++) {
          notes[i].id = i.toString();
      }

      fs.writeFileSync(
          path.join(__dirname, "../db/db.json"),
          JSON.stringify({ notes:notesArray }, null, 2)
          )
  }


 function validateNote(note) {
     if (!note.title || typeof note.title !== 'string') {
       return false;
     } 
     if (!note.text || typeof note.text !== 'string') {
         return false;
     }
     return true;
 }
 
 module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote,
    deleteNote
  };