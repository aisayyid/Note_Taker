//Setting required global variables.
const express = require("express");
//Using express.
const app = express();
//Setting initial port.
var PORT = process.env.PORT || 8080;
//Setting up express to handle data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//Setting route files as a point of reference for our server.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//Listener that starts the server.
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});