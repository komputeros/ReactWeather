var express = require('express');
var app = express();
var cors = require('cors');


app.use(express.static('public'));
app.use(cors());



app.listen(3000, function() {
  console.log("Webserver started at localhost:3000");
});
