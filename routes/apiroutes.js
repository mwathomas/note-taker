const util = require("util");
const router = require("express").Router();
const fs = require("fs");
const notes = require("../db/db.json");

// GET Route for retrieving notes
router.get("/api/notes", (req, res) => {
  console.info(`${req.method} request received for tips`);
  res.status(200).json(notes);
});

// POST Route for adding notes
// router.post("/api/notes", (req, res) => {
//   console.info(`${req.method} request received to add a tip`);

//   const { title, text } = req.body;

//   if (req.body) {
//     const newNote = {
//       title,
//       text,
//     };

//     readAndAppend(newNote, "./db/db.json");
//     res.json(`Tip added successfully 🚀`);
//   } else {
//     res.error("Error in adding tip");
//   }
// });

module.exports = router;
