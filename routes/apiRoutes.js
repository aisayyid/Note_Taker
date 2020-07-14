const notesdb = require("../db/Notesdb");

module.exports = function(app) {
//API GET Request.  Handles data coming in from notes.html
    app.get("/api/notes", function(req, res) {
        res.json("db/db.json");
      });
//Saves new notes to db.json file.
      app.post("/api/notes", function (req,res) {
        notesdb.push(req.body);
        res.json(true);

      })
     
}