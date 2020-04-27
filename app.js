const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

//res.json()用于接口返回json数据
app.get('/login.do', (req, response) => {

    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'}); //这句不能要
    console.log(req.url);
    var url = req.url.substring(1); //获取访问这个端口的url 比如，以localhost:8091/index的形式访问，url的值就是/index
    if (url.indexOf("login") != -1) {
        var urlParams = url.split("?")[1];
        var json = {};
        urlParams.split("&").forEach(paramMap => {
            json[paramMap.split("=")[0]] = paramMap.split("=")[1];
        });
        console.info(json);
        if (json.username == "Elliot" && json.password == "123456") {
            console.info("login success");
            let param = {msg: `用户${json.username}登陆成功`};
              response.json(param);
        } else {
            console.info("not match the user Elliot!!");
              response.json('{ msg: "账号或密码错误！！！" }');
        }
    }
});
app.listen(3001, () => {
    console.log('服务启动了:listening on port 3001.');
})