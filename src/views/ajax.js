const express = require("express");

const app = express();

app.get("/ajax", (request, response) => {

    // 设置响应体和响应头 
    response.setHeader('Access-Control-Allow-Origin', '*')

    response.send('AJAX请求')
});

app.listen(3333, () => {
  console.log("服务器启动 3333端口正在执行....");
});
