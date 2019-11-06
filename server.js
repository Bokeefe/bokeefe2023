const express = require('express');
const app = express();
var fs = require('fs');

app.use(express.static(__dirname + '/dist/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080, function() {
  console.log('app listening on port 8080!');
});
