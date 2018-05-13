<template>
  <div class="index">
    <div class="signContent">
      <!--兴趣模块-->

      <div class="sign">
        <div style="padding-bottom: 20px;margin-top: 0;text-align: center"><img src="./../assets/logo.png" alt=""></div>
        <div>用户名：<input type="text" v-model="name" placeholder="输入用户名"></div>
        <div>密&nbsp;&nbsp;&nbsp;码：<input type="password" v-model="password" placeholder="输入密码"></div>
        <div class="subLog"><span @click="sign()">登 录</span></div>
        <div><p>没有账号？去注册</p></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Items from './../components/Items.vue'
  import gql from 'graphql-tag'
  var SignQuery = gql`
      query user($name:String!,$password:String!){
          signin(name:$name,password:$password){
            name
            message
          }
        }
      `
  export default {
    name: 'Index',
    data () {
      return {
         name:'admin',
         password:'123456'
      }
    },
    methods:{
      sign:function(){
         this.$apollo.query(
           {
             query:SignQuery,
             variables:{
               name:this.name,
               password:this.password
             }
           }
         )
         .then((res)=>{
           alert(res.data.signin.message)
         })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .signContent{
    position: relative;
  }
  .sign{
    width: 300px;
    margin: 0 auto;
    background: #fff;
    text-align: left;
    padding: 30px;
    position: relative;
    top:200px;
    line-height: 30px;
    box-shadow: 2px 2px 3px #ccc;
  }
  .sign div{
    margin: 10px 0;
  }
  .sign .subLog{
    text-align: center;
    padding-top: 10px;
  }
  .sign .subLog span{
    display: inline-block;
    padding:0px 20px;
    border-radius: 4px;
    background: #00a4ff;
    cursor: pointer;
    color: #fff;
  }
  .signContent input{
    width: 210px;
    line-height: 24px;
    padding: 0 10px;
  }
</style>
