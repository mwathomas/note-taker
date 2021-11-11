const util = require("util");
const router = require("express").Router();
const fs = require("fs");

// GET Route for retrieving notes
router.get("/api/notes", (req, res) => {
  console.info(`${req.method} request received for tips`);
  fs.readFile("./db/db.json", utf8);
  res.json(JSON.parse(data));
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
