<template>
  <div class="itemBox" @click="sb()">
    <div class="recom-item" v-if="itemDataes" :style="wth" v-for="(item,index) in itemDataes">
      <a href="#">
        <p><img :src="BaseServerUrl + item.imgUrl" width="100%" alt=""><span class="lab">HOT</span></p>
        <ul>
          <li>{{item.des}}  </li>
          <li><span>{{item.level}}</span> <em> · </em>  {{item.learingNum}}</li>
        </ul>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Items',
    props: ['itemDataes','col'],
    data () {
      return {
        BaseServerUrl:BaseServerUrl,
        maxIt: '',
      }
    },
    computed:{
      wth:function(){
        var col = this.col ? this.col : 5
        return {width:[100 - ((col-1) * 1.5)]/col + "%"}
      }
    },
    methods:{
      sb:function(){
        console.log(this.wth)
      }
    }

  }
</script>
<style scoped>
  .recom-item:nth-child(5n+1){
    margin-left: 0;
  }
  .recom-item{
    text-align: left;
    background: #fff;
    margin: 10px 0;
    width: 18.8%;
    margin-left: 1.5%;
    float: left;
  }
  .recom-item a {
    color: #050505;
    text-decoration: none;
  }
  .recom-item p {
    position: relative;
  }
  .recom-item p .lab {
    font-size: 12px;
    text-align: center;
    width: 41px;
    height: 24px;
    line-height: 22px;
    color: #f07700;
    position: absolute;
    right: -5px;
    top: 10px;
    background: url(../assets/hotIco.png) no-repeat;
  }
  .recom-item ul {
    padding: 25px;
    font-size: 14px;
  }
  .recom-item ul li {
    list-style: none;
  }
  .recom-item ul li:nth-child(2) {
    margin-top: 20px;
    color: #999;
  }
  .recom-item ul li:nth-child(2) span {
    color: #ff7c2d;
  }
  .recom-item ul li:nth-child(2) em {
    font-weight: bold;
  }
</style>
