const fs = require("fs");
const util = require("util");
// The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
    constructor() {
    }
    //method to read and parse notes
    async readNotes() {
        const notes = await readFileAsync("db/db.json")
        return JSON.parse(notes);
    }
    //method to write and stringify notes
    async writeNotes(note) {
        //update to read first and then add new note with id
        await writeFileAsync("db/db.json", JSON.stringify(note))
        //reads new notes
        const notes = await this.readNotes()

        console.log(notes);
        return
    }
}

module.exports = new Notes();