const express = require('express');
const path = require('path');
const app = express();
// app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
    //拦截
    console.log(req.url);
    next();//
});

//res.json()用于接口返回json数据
app.post('/ctapi/target/getTargetClassify', (req, response) => {
    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'}); //这句不能要
    // console.log(req.url);

});
app.listen(3003, () => {
    console.log('服务启动了:listening on port 3003.');
})