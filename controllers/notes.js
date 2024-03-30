const notesRouter = require("express").Router();
const Note = require("../models/note");

notesRouter.get("/", async (request, response) => {
  const notes = await Note.find({});
  response.json(notes);
});

notesRouter.put("/:id", async (request, response) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };
  const updateNote = await Note.findByIdAndUpdate(request.params.id, note, {
    new: true,
  });
  response.json(updatedNote);
});

notesRouter.post("/", async (request, response) => {
  const { content, important } = request.body;

  if (!content) {
    return response.status(400).json({ error: "Content is missing" });
  }
  const note = new Note({
    content: content,
    important: important || false,
  });

  const savedNote = await note.save();
  response.status(201).json(savedNote);
});

notesRouter.get("/:id", async (request, response) => {
  const note = await Note.findById(request.params.id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

notesRouter.delete("/:id", async (request, response) => {
  await Note.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

module.exports = notesRouter;
