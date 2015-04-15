var express = require('express');
var app = express();
var path = require('path');

global.__base = __dirname + "/";

//run client index
app.use(express.static(__base));

app.get('/', function(req, res) {

    res.sendFile(path.resolve(__base + 'index.html'));

});

app.listen(3000);