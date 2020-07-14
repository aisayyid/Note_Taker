// We need to include the path package to get the correct file path for our html
const path = require("path");

module.exports = function (app) {

  //HTML GET requests that direct users to a page.
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //Takes you to home page.
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};