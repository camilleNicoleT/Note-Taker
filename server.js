const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./data/notes');

const PORT = process.env.PORT || 3001;
const app = express();
// // parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));
// // parse incoming JSON data
// app.use(express.json());


function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
  }
  
  function createNewNote(body, notesArray) {
    const notes = body;
  notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, './data/db.json'),
      JSON.stringify({notes:notesArray }, null, 2)
    );
    returnNote;
  }
  function validateNote(note) {
    if (!note.title || typeofNote.title !== 'string') {
      return false;
    }
});

app.get('/api/notes/:id', (req, res) => {
const result = findById(req.params.id, notes);
if (result) {
    res.json(result);
 } else {
    res.send(404);
}
});

// //GET /notes should return the notes.html file.
// app.get(/notes)
app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
    });

// // GET * should return the index.html file.
// app.get(*)

// app.get(api/notes)

// GET /api/notes should read the db.json file and return all saved notes as JSON.

app.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
  // add note to json file and notes array in this function
const note = createNewNote(req.body, notes);
    res.json(note);
  }
  });

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });