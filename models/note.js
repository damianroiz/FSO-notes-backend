const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  // copied from https://github.com/fullstack-hy2020/part3-notes-backend/blob/part4-5/models/note.js

  content: {
    type: String,
    required: true,
    minlength: 5,
  },
  important: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
