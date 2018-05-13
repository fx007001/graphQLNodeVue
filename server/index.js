var express = require('express');
const path = require('path')
var graphqlHTTP = require('express-graphql');
var fs = require('fs');
var schemaUser = require('./schema/user.js')
var rooterUser = require('./resolver/user.js')

var app = express();


// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'files')))

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});

// 图片服务配置
app.get('/files/*',function(req, res, next){
  var content =  fs.readFileSync('./'+ req.url,"binary");
  res.write(content,"binary"); //格式必须为 binary，否则会出错
  res.end();
});

// graphql 接口服务
app.use('/', graphqlHTTP(function(){
  return {
    schema: schemaUser,
    rootValue: rooterUser,
    graphiql: true, //启用GraphiQL
  }
}));



app.listen(4000, () => console.log('请在浏览器中打开地址：localhost:4000'));