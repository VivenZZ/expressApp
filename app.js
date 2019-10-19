var express = require('express');
var http = require('http');
var app = express();

// 所有的请求都通过这里
app.all('*', (req, res, next) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    next();
});
app.get("/", (req, res) => res.end("home page!"));
app.get("/about", (req, res) => res.end("about page!"));
// 带参数的请求
// app.get("/hello/:who", (req, res) => res.end(req.params.who));
// 带参数的请求可选
app.get("/hello/:who?", (req, res) => {
    if (req.params.who) {
        res.end(req.params.who);
    } else {
        res.end('hello!');
    }
});
app.get("*", (req, res) => res.end("404!"));

http.createServer(app).listen(1337);