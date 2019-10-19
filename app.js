var express = require('express');
var http = require('http');
var app = express();

// 重定向的请求要在发送headers之前，不然会报错。
app.get("/about", (req, res) => {
    // 重定向
    res.redirect("/hello/admin");
});
// 所有的请求都通过这里
app.all('*', (req, res, next) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    next();
});
app.get("/", (req, res) => res.end("home page!"));
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