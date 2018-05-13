var users = require('./../apiDataes/default')
var interest = require('./../apiDataes/Interest')
var dataBases = require('./../apiDataes/dataBases')

//定义resolver
var root= {
  // query resolver
  user: function ({id}) {
    return users[id];
  },
  users: function () {
    return users;
  },
  //登录
  signin:function({name,password}){
    let userInfo = {
      name:name,
      message:'用户名密码不存在!'
    }
    if(name){
      users.map((n,i)=>{
        if(n.name == name){
          userInfo.message = '登录成功！'
        }
      })
      return userInfo
    }
  },
  //注册
  register:function({name,password}){
    let userInfo = {
      name:name,
      password:password,
      message:'注册成功!'
    }
    console.log(name)
   users.push(userInfo)
   return userInfo
  },
  //兴趣标签
  interestes:function({userId}) {
    return interest
  },
  //推荐课程
  recommend:function(){
    return dataBases.recommendDataes;
  },
  //PHP 新手入门 && 课程分类 lab 1 为 首页展示的入门课程  2 为分类
  PHPStartData:function({lab}){
    if(lab == 1){
      let dataes = []
      dataBases.PHPStartData.map(function(n, i){
        if(n.lab == lab){
           dataes.push(n)
        }
      })
      return dataes
    }else if(lab == 2){
      let dataes = []
      dataBases.PHPStartData.map((n,i) => {
        if(n.lab === lab){
          dataes.push(n)
        }
      })
      return dataes
    }
  },
  //教师推荐
  recomTearch:function({showPage,pageNum,startPage,endPage}){
     if(showPage && pageNum){
       let data = []
       dataBases.teachDaeaes.map(function (n,i) {
         if(pageNum*(showPage-1) <= i && i < pageNum*showPage){
           data.push(n)
         }
       })
       return data
     }else{
       return dataBases.teachDaeaes;
     }
  },
  //mutation resolver
  addUser:function({name,sex,intro,skills}){
    var user={
      name:name,
      sex:sex,
      intro:intro,
      skills:skills
    };
    users.push(user);
    return user;
  },
  addUserByInput:function({userInfo}){
    var user={
      name:userInfo.name,
      sex:userInfo.sex,
      intro:userInfo.intro,
      skills:userInfo.skills
    };
    users.push(user);
    return user;
  },
};

module.exports = root