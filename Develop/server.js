const express = require("express");
const path = require("path");
const util = require("util");
const fs = require("fs");
const readFromFile = util.promisify(fs.readFile);
const db = require("../Develop/db/db.json");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//`GET /notes` should return the `notes.html` file.
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../Develop/public/notes.html"))
);

// `GET *` should return the `index.html` file.
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "../Develop/public/index.html"))
);

app.get("/api/notes", (req, res) => res.json(db));

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
