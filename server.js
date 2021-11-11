const express = require("express");
const path = require("path");
const fs = require("fs");
const apiRoutes = require("../Develop/routes/apiroutes");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(apiRoutes);

//`GET /notes` should return the `notes.html` file.
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../Develop/public/notes.html"))
);

// `GET *` should return the `index.html` file.
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "../Develop/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);