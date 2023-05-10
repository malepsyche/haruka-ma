// Configurations for main application file app.js
const express = require("express");       // import express
const path = require("path");          // import path
const app = express();          // app = express application

app.set("views", path.join(__dirname, "views"));  // set the built-in property "views" to the local path __dirname/views (__dirname is the current directory) -> This tells the application that all our ejs template (view) files are in the directory "__dirname/views" so that we won't have to specify the absolute path for every page that we render 
app.set("view engine", "ejs");          // set our view engine to ejs (embedded javascript)


// Import local files
const homePage = require("./routes/home-page");


// Direct the URLs to the corresponding local files
app.use("/", homePage);


// Start the server
app.set("port", process.env.PORT || 3000);        // set port number to PORT if not NULL, else 3000
app.listen(app.get("port"), function(){
          console.log("Server started on port " + app.get("port"));   // starts the server and tells it to listen for incoming requests on a specified port number.
});

 