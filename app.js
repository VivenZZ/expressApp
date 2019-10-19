// 加载express模块
const express = require("express");
// 生成express实例
const app = express();
const path = require('path');
// 设定express实例参数

// 设置port变量，访问端口
app.set('port', process.env.PORT || 3000);
// 设定views变量，视图存放的目录
app.set('views', path.join(__dirname, 'views'));
// 设定view engine变量，网页模板引擎
app.set('view engine', 'jade');

// 设定静态文件目录，比如本地文件
// 目录为demo/public/images，访问
// 网址则显示为http://localhost:3000/images
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'));