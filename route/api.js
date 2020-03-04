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
    
});

  // DELETE call
  app.delete("/api/notes/:id", function(req, res) {
    
  });
};
