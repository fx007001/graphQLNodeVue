<template>
  <div class="header">
    <div class="headerTop">
      <div><img src="./../assets/logo.png" alt=""></div>
      <div class="nav"><nav><a href="/">首页</a> <a href="/courseItem">课程</a><a href="#"></a><a href="#">职业规划</a></nav></div>
      <div><div class="search"><input type="text"><input type="submit" class="sub" value="搜索"></div></div>
      <div class="sign">个人中心 <img src="./../assets/myImg.jpg" alt="">{{user.name}}</div>
    </div>
  </div>
</template>
<script>
  import gql from 'graphql-tag'
  const userData = gql`
    {
      user(id:0) {
        name
        sex
        intro
        skills
      }
    }`
  export default {
    name: 'Index',
    data () {
      return {
        user: ''
      }
    },
    apollo: {
      user: {
        query: userData,
        loadingKey: 'loading',
        error(error) {
          console.error('We\'ve got an error!', error)
          this.error = error
        }
      },
    },
    methods:{
      init:function(){
      }
    },
    mounted:function(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background: #fff;
}
.headerTop{
  display: flex;
  padding: 30px 0;
  width: 80%;
  max-width: 1366px;
  margin: 0 auto;
}
.header .nav{
  flex: 2;
}
.header .search{
  display: flex;
  border: solid 2px #00a4ff;
  padding-left: 10px;
}
.header nav a{
  display: inline-block;
  padding: 5px 15px;
  text-align: left;
  color:#333;
  font-size: 18px;
}
.header input{
    border:none;
}
.header .sub{
  background:#00a4ff;
  color:#fff;
}
.header .sign{

}
.header .sign img{
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
</style>
