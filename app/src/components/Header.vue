<template>
  <div class="header">
    <div class="headerTop">
      <div><img src="./../assets/logo.png" alt=""></div>
      <div class="nav"><nav><a href="/">首页</a> <a href="/courseItem">课程</a><a href="#"></a><a href="#">职业规划</a></nav></div>
      <div class="search"><input type="text" class="search"><input type="submit" class="sub" value="搜索"></div>
      <div class="sign">个人中心 <img src="./../assets/myImg.jpg" alt="">{{user.name}} <span @click="signOut()">退出</span></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data () {
      return {
        user: ''
      }
    },
    methods:{
      init(){
        let user = window.localStorage.getItem('user')
        this.user = JSON.parse(user)
      },
      signOut:function(){
        window.localStorage.removeItem('user')
        this.$router.push('/sign')
      }
    },
    mounted:function(){
      this.init()
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
  padding: 2px 20px 10px 10px;
  flex:2;
  max-width: 380px;
}
.header nav a{
  display: inline-block;
  padding: 5px 15px;
  text-align: left;
  color:#333;
  font-size: 18px;
}
.header input{
    border: solid 2px #00a4ff;
}
.header .sub{
  background:#00a4ff;
  padding: 0 15px;
  font-size: 14px;
  color:#fff;
}
.header .sign span{
  color: #00a4ff;
  cursor:pointer;
}
.header .sign img{
  position: relative;
  top:10px;
  margin:0 10px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
</style>
