<template>
  <div class="footer">
    <div class="foot">
      <div class="footLeft">
        <p><img src="./../assets/logo.png" alt=""></p>
        <p>学成网致力于普及中国最好的教育它与中国一流大学和机构合作提供在线课程。</p>
        <p> © 2017年XTCG Inc.保留所有权利。-沪ICP备15025210号</p>
        <p> <span>下载</span></p>
      </div>
      <div class="about">
          <dl class="">
            <dt>关于学成网</dt>
            <dd>关于</dd>
            <dd>管理团队</dd>
            <dd>工作机会</dd>
            <dd>客户服务</dd>
            <dd>帮助</dd>
          </dl>
          <dl class="">
            <dt>新手指南</dt>
            <dd>如何注册</dd>
            <dd>如何选课</dd>
            <dd>如何拿到毕业证</dd>
            <dd>学分是什么</dd>
            <dd>考试未通过怎么办</dd>
          </dl>
          <dl class="">
            <dt>合作伙伴</dt>
            <dd>合作机构</dd>
            <dd>合作导师</dd>
          </dl>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
    data () {
      return {
        msg: '',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    background: #fff;
    text-align: left;
  }
  .foot{
    width: 80%;
    max-width: 1366px;
    margin: 0 auto;
    display: flex;
  }
  .footLeft{
    padding-top:20px;
    flex: 7;
  }
  .footLeft p span{
    border-radius: 3px;
    background: #00a4ff;
    padding: 4px 15px;
    font-size: 14px;
    color:#fff;
  }
  .footer .about{
    font-size: 14px;
    line-height: 40px;
    display: flex;
    text-align: left;
    flex: 5;
  }
  .footer .about dl{
    margin-left: 40px;
  }
  .footer .about dt{
    font-weight: bold;
  }
  .footer .about dd{
    margin: 0px;
  }
</style>
