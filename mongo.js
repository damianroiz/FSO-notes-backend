// const mongoose = require("mongoose");
// require("dotenv").config();

// // if (process.argv.length < 3) {
// //   console.log("give password as argument");
// //   process.exit(1);
// // }

// const password = process.argv[2];

// const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@first-cluster.vi7l3sh.mongodb.net/noteApp?retryWrites=true&w=majority`;

// mongoose.set("strictQuery", false);
// mongoose.connect(url).then(() => {
//   const noteSchema = new mongoose.Schema({
//     content: String,
//     important: Boolean,
//   });

//   const Note = mongoose.model("Note", noteSchema);

//   // const notes = [
//   //   {
//   //     content: "HTML is Easy",
//   //     important: true,
//   //   },
//   //   {
//   //     content: "CSS is hard but fun",
//   //     important: true,
//   //   },
//   //   {
//   //     content: "Mongoose is complicated",
//   //     important: false,
//   //   },
//   // ];

//   ////////////// To insert more data
//   // Note.insertMany(notes).then((result) => {
//   //   result.forEach((note) => {
//   //     console.log(note);
//   //   });
//   //   mongoose.connection.close();
//   // });

//   ////////// To update notes data
//   // notes.forEach((note) => {
//   //   Note.findOneAndUpdate(
//   //     { content: note.content },
//   //     { $set: note },
//   //     { upsert: true, new: true, runValidators: true }
//   //   ).then((updatedNote) => {
//   //     console.log(updatedNote);
//   //   });
//   // });

//   const promises = notes.map((note) => {
//     return Note.findOneAndUpdate(
//       { content: note.content },
//       { $set: note },
//       { upsert: true, new: true, runValidators: true }
//     );
//   });

//   Promise.all(promises)
//     .then((updatedNotes) => {
//       console.log(updatedNotes);
//       mongoose.connection.close();
//     })
//     .catch((error) => {
//       console.error(error);
//       mongoose.connection.close();
//     });
// });


