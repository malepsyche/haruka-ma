var express = require("express");       // import express
var router = express.Router();          // import router class from express

// routing for GET requests
router.get("/", function(req, res){     // router.get = route handling for when someone sends a get request for your browser URL
          console.log("Someone just sent a get request for your URL when they went onto your webpage");
          res.render("home-page");          // renders the HTML file home-page.ejs as a response (res) to the client's web browser
});

module.exports = router;
