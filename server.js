// Dependencies
// =============================================================


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


 


app.listen(PORT, function(){
    console.log(" server is listening on port:" + PORT)
});






//https://github.com/vnardozz/PeopleFinder.git