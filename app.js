var express = require('express');
var app = express();
var routers = require('./routers');
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    if (req.url == "/") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Welcome to the homepage!\n");
    } else {
        next();
    }
});
app.use((req, res, next) => {
    if (req.url == "/about") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Welcome to the aboutpage!\n");
    } else {
        next();
    }
});
routers(app);
app.use((req, res) => {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 error!\n");
});
app.listen(1337);