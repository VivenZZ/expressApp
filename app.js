var express = require('express');
var app = express();
var routers = require('./routers')(app);
app.use(express.static(__dirname + '/public'));

app.listen(8080);