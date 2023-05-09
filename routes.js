var express = require("express");       // import express
var router = express.Router();          // import router class from express
router.get("/", function(req, res){     // router.get = route handling for when someone sends a get request for your browser URL
          console.log("Someone just sent a get request for your URL when they went onto your webpage");
});

module.exports = router;
