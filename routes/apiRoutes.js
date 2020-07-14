const notesdb = require("../db/Notesdb");
const { v1: uuidv1 } = require('uuid');


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
                req.body.id = uuidv1();
                const newNotes = [...notes, req.body]
                notesdb.writeNotes(newNotes)
                    .then(function (data) {
                        res.json(data);

                    })
            })
    })
};   
