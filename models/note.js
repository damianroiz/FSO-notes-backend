const mongoose = require("mongoose");
// const url = newFunction();

const noteSchema = new mongoose.Schema({
  // copied from https://github.com/fullstack-hy2020/part3-notes-backend/blob/part4-5/models/note.js

  content: {
    type: String,
    required: true,
    minlength: 5,
  },
  important: Boolean,

  // replacing...
  // content: {
  //   type: String,
  //   _minLength: 5,
  //   get minLength() {
  //     return this._minLength;
  //   },
  //   set minLength(value) {
  //     this._minLength = value;
  //   },
  //   required: true,
  // },
  // important: Boolean,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
// function newFunction() {
//   require("dotenv").config();

//   mongoose.set("strictQuery", false);

//   const url = process.env.MONGODB_URI;

//   console.log("connecting to", url);
//   return url;
// }
