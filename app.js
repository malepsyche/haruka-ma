var express = require("express");       // import express
var path = require("path");          // import path

var app = express();          // app = express application
app.set("port", process.env.PORT || 3000);        // set port number to PORT if not NULL, else 3000

//__________________________________________________________________
// Starting the server

// app is a variable representing the Express application.
// listen is a function that starts the server and tells it to listen for incoming requests on a specified port number.
// app.get("port") is a function that retrieves the value of the port property that was previously set using the app.set method.
// The first argument passed to listen is the port number that the server should listen on. This value is retrieved by calling app.get("port").
// The second argument passed to listen is a callback function that is called when the server starts listening for incoming requests. It logs a message to the console indicating that the server has started and specifies the port number that it's listening to
app.listen(app.get("port"), function(){
          console.log("Server started on port " + app.get("port"));
});

