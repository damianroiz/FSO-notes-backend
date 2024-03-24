// ...

test("a new note can be created", async () => {
  const newNote = {
    content: "Test note",
    important: true,
  };

  const response = await api
    .post("/api/notes")
    .send(newNote)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const createdNote = await Note.findById(response.body.id);
  expect(createdNote.content).toBe(newNote.content);
  expect(createdNote.important).toBe(newNote.important);
});

test("a new note without 'important' field defaults to false", async () => {
  const newNote = {
    content: "Test note without importance",
  };

  const response = await api
    .post("/api/notes")
    .send(newNote)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const createdNote = await Note.findById(response.body.id);
  expect(createdNote.content).toBe(newNote.content);
  expect(createdNote.important).toBe(false);
});

// ...
