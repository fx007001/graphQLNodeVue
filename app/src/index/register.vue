<template>
  <div class="index">
    <div class="registerContent">
      <!--兴趣模块-->

      <div class="register">
        <div style="padding-bottom: 20px;margin-top: 0;text-align: center"><img src="./../assets/logo.png" alt=""></div>
        <div>手&nbsp;&nbsp;&nbsp;机：<input type="text" v-model="pho" placeholder="输入手机号"></div>
        <div>用户名：<input type="text" v-model="name" placeholder="输入用户名"></div>
        <div>密&nbsp;&nbsp;&nbsp;码：<input type="password" v-model="password" placeholder="输入密码"></div>
        <div class="subLog"><span @click="register()">注册</span></div>
        <div>没有账号？去注册</div>
      </div>
    </div>
  </div>
</template>
<script>
  import Items from './../components/Items.vue'
  import gql from 'graphql-tag'
  var register = gql`
    mutation register($name:String!, $password:String!){
      register(name:$name,password:$password){
        name
        password
        message
      }
    }
  `
  export default {
    name: 'Index',
    data () {
      return {
        pho:15116921239,
        name:'admin',
        password:'123456'
      }
    },
    methods:{
      register:function(){
        this.$apollo.mutate({
          mutation:register,
          variables:{
            name:this.name,
            password:this.password
          }
         })
          .then((res)=>{
          alert('注册成功！')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .registerContent{
    position: relative;
  }
  .register{
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
  .register div{
    margin: 10px 0;
  }
  .register .subLog{
    text-align: center;
    padding-top: 10px;
  }
  .register .subLog span{
    display: inline-block;
    padding:0px 20px;
    border-radius: 4px;
    background: #00a4ff;
    cursor: pointer;
    color: #fff;
  }
  .registerContent input{
    width: 210px;
    line-height: 24px;
    padding: 0 10px;
  }
</style>
