const notesdb = require("../db/Notesdb");

module.exports = function (app) {
    //API GET Request.  Handles data coming in from db.json
    app.get("/api/notes", function (req, res) {

        notesdb.readNotes()
            .then(function (notes) {
                res.json(notes);
            })
    });



    //Saves new notes to db.json file.
    app.post("/api/notes", function (req, res) {
        //Getting the current notes.
        notesdb.readNotes()
            .then(function (notes) {
                //add the new note to the array
                const newNotes = [...notes, req.body]
                notesdb.writeNotes(newNotes)
                    .then(function (data) {
                        res.json(data);

                    })
            })
    })
};   
