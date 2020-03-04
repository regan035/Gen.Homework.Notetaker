const fs = require("fs");
const saveNotes = require("../db/db.json");

module.exports = function(app) {
  // GET call
  app.get("/api/notes", function(req, res) {
    res.json(saveNotes);
    console.log(saveNotes);
  });

  // POST call
  app.post("/api/notes", function(req, res) {
    saveNotes.push(req.body)
    res.json(saveNotes)
  });

  // DELETE call
  app.delete("/api/notes/:id", function(req, res) {
    for (let i = 0; i < saveNotes.length; i++) {
      if(saveNotes[i].id === req.params.id){
        saveNotes.splice(i, 1)
      }
      res.json(saveNotes)
    }
  });
};
