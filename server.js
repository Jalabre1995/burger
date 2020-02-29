var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

///Serve static content for the app form the "public" directory in the app////

app.use(express.static("Public"));

//Parse the application of the body///

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Set the handlebars////

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give the server access to them.///
var routes = require("./controller/burgers_controller.js");

app.use("/", routes);

//Start our server so that it can begin listening to the requests///

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

