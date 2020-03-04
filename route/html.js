  
var path = require("path");

//Routes
module.exports = function(app) {
  //Routes to notes.html
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //Routes to index.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
