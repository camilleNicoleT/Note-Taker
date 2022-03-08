const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewNote
} = require("../lib/notes.js");
const { notes } = require("../db/db.json");

test("creates an note object", () => {
  const note = createNewNote(
    { Title: "Meeting", id: "jhgdja3ng2" },
    notes
  );

  expect(note.name).toBe("Meeting");
  expect(note.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
    const startingNotes = [
      {
        "title": "Test title",
        "text": "Test text",
        "id": "0"
      },
      {
        "title": "TestTitle2",
        "text": "Test text 2",
        "id": "1"
      },
      {
        "title": "TestTitle3",
        "text": "Test text 3",
        "id": "2"
      }
    ];

    const updatedNotes = filterByQuery({ Title: "Test title" }, startingNotes);
  
    expect(updatedNotes.length).toEqual(1);
  });

  test("finds by id", () => {
    const startingNotes = [
        {
            "title": "TestTitle3",
            "text": "Test text 3",
            "id": "3"
          },
          {
            "title": "TestTitle4",
            "text": "Test text 4",
            "id": "4"
          }
    ];

    const result = findById("3", startingNotes);
  
    expect(result.title).toBe("TestTitle3");
  });

  