<template>
  <div class="index">
    <Header />
    <div class="banner">
      <img src="./../assets/banner.jpg" width="100%" alt="">
    </div>
    <div class="content">
      <!--兴趣模块-->
      <div class="interest">
        <div class="left">精品推荐</div>
        <div class="cont">
          <li v-for="(item, index) in interestes.dataes">{{item}}</li>
        </div>
        <div class="right">修改兴趣</div>
      </div>
      <!--精品推荐模块  课程推荐-->
      <div class="recommend">
        <div class="title">精品推荐<a href="#">查看全部</a></div>
        <div class="cont">
          <Items :itemDataes = recommendDataes />
        </div>
      </div>

      <!--编程入门 展示-->
      <div class="startRecom" v-for="(item,index) in PHPStartData">
          <div class="title">
            {{item.className}}
            <div class="course-nav">
              <span class="active">热门</span>
              <span>初中</span>
              <span>中级</span>
              <span>高级</span>
            </div>
            <a href="#">查看全部</a>
          </div>
          <div class="cont">
              <div class="left">
                <img v-if="item.advImg" :src="BaseServerUrl + item.advImg[0]" width="100%" alt="">
              </div>
              <div class="right">
                <div class="top"><img v-if="item.advImg" :src="BaseServerUrl + item.advImg[1]" width="100%" alt=""></div>
                <div class="botBox">
                   <Items :itemDataes = item.itemData :col = "4" > </Items>
                </div>
              </div>
          </div>
      </div>
      <!--课程分类展示-->
        <div class="courseRecom" v-for="Item in ClassItem">
          <div class="title">
            {{Item.className}}
            <div class="course-nav">
              <span class="active">热门</span>
              <span>初中</span>
              <span>中级</span>
              <span>高级</span>
            </div>
            <a href="#">查看全部</a>
          </div>
          <div class="cont">
            <Items :itemDataes = Item.itemData />
          </div>
        </div>
     <!--推荐 - 教师推荐-->
       <div class="teachRecom">
         <div class="title">牛人推荐</div>
         <div class="cont">
           <div class="first-box">
             <div class="teach-item" v-for="item in recomTeach">
               <img :src="BaseServerUrl + item.imgUrl" width="100%" alt="">
               <span class="lab">{{item.workLeng}}学习过</span>
               <ul class="teach-info" style="height: 112px;">
                 <li>{{item.name}}   <span>{{item.tag}}</span></li>
                 <li style="font-size: 14px;margin-top: 10px;">{{item.des}}</li>
               </ul>
             </div>
             <div class="clearfix"></div>
           </div>
         </div>
       </div>
    </div>
    <Footer />
  </div>
</template>
<script>
  import Header from './../components/Header'
  import Footer from './../components/Footer'
  import Items from './../components/Items.vue'

  import gql from 'graphql-tag'
  const Interest = gql`
    query PingMessage($ids:Int!){
      interestes(userId:$ids) {
        dataes
      }
    }`
  const Recommend = gql`
    query Recom{
      recommend{
        id
        title
        imgUrl
        des
        teach
        level
        learingNum
      }
    }
  `
  const PHPStart = gql`
    query PHPStart($lab:String){
      PHPStartData(lab:$lab){
        total
        className
        advImg
        itemData{
          id
          title
          imgUrl
          des
          teach
          level
          learingNum
        }
      }
    }
  `
  const recomTearch = gql`
    query recomTearch($num:String,$pageNum:String){
      recomTearch(showPage:$num,pageNum:$pageNum){
        id
        name
        imgIco
        imgUrl
        des
        tag
        workLeng
      }
    }
  `
  export default {
    name: 'Index',
    data () {
      return {
        BaseServerUrl:BaseServerUrl,
        user: '',
        interestes:'asfdasdf',
        ids: 1,
        lab:'1',
        loading:0,
        imgUrl:[1,2,3,4,4],
        recommendDataes:'',
        PHPStartData:'',
        ClassItem:'',
        recomTeach:''
      }
    },
    apollo: {
      interestes: {
        query:Interest,
        loadingKey: 'loading',
        variables(){
          return {
            "ids": this.ids
          }
        },
        error(error) {
          console.error('We\'ve got an error!', error)
          this.error = error
        }
      },
      recommendDataes: {
        query:Recommend,
        loadingKey: 'loading',
        variables(){
          return {
          }
        },
        update(data) {
          return data.recommend
        },
        error(error) {
          console.error('We\'ve got an error!', error)
          this.error = error
        }
      },
      PHPStartData: {
        query:PHPStart,
        loadingKey: 'loading',
        variables(){
          return {
            lab:this.lab
          }
        },
        update(data) {
          return data.PHPStartData
        },
        error(error) {
          console.error('We\'ve got an error!', error)
          this.error = error
        }
      },
      ClassItem: {
        query:PHPStart,
        loadingKey: 'loading',
        variables(){
          return {
            lab: '2'
          }
        },
        update(data) {
          return data.PHPStartData
        },
        error(error) {
          console.error('We\'ve got an error!', error)
          this.error = error
        }
      },
      recomTeach: {
        query:recomTearch,
        loadingKey: 'loading',
        variables(){
          return {
            showPage:10,
            pageNum:10
          }
        },
        update(data) {
          console.log(data)
          return data.recomTearch
        },
        error(error) {
          console.error('We\'ve got an error!', error)
          this.error = error
        }
      }
    },
    components:{
      Header,
      Footer,
      Items
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    width:80%;
    max-width: 1366px;
    margin: 0 auto;
  }
  .interest{
    background: #fff;
    margin:10px 0;
    display: flex;
    box-shadow: 2px 2px 2px #ccc;
    padding: 15px;
    font-size: 16px;
  }
  .interest .left{
    flex:1;
    color:#00a4ff;
    border-right:solid 1px #999999;
  }
  .interest .cont {
    flex:10;
    display: flex;
    color:#333;
  }
  .interest .cont li{
    flex: 1;
    border-right:solid 1px #999999;
    text-align: center;
    list-style: none;
  }
  .interest .right{
    flex:1;
    color:#00a4ff;
  }
  .recommend .title, .teachRecom .title{
    position: relative;
    font-size: 20px;
    text-align: left;
    margin-top: 35px;
    margin-bottom: 20px;
  }
  .recommend .title a {
    position: absolute;
    font-size: 12px;
    color: #787d82;
    top: 10px;
    right: 20px;
  }
  .recommend .cont{
    overflow: hidden;
  }
  .startRecom, .courseRecom, .startRecom{
    overflow: hidden;
    position: relative;
    margin-top: 30px;
    max-height: 480px;
    margin-bottom: 20px;
  }
  .startRecom .title, .courseRecom .title{
    margin-bottom: 15px;
    position: relative;
    font-size: 20px;
    text-align: left;
  }
  .startRecom .course-nav, .courseRecom .course-nav{
    display: inline-block;
    max-width: 385px;
    font-size: 16px;
    position: relative;
    left: 50%;
    color: #787d82;
    transform: translateX(-70%);
  }
  .startRecom .course-nav .active, .courseRecom .course-nav .active{
    color:#00a4ff;
  }
  .startRecom .course-nav span, .courseRecom .course-nav span{
    display: inline-block;
    padding: 0 30px;
  }
  .startRecom a, .courseRecom a{
    position: absolute;
    font-size: 12px;
    color: #787d82;
    top: 10px;
    right: 20px;
  }
  .startRecom .cont{
    display: flex;
  }
  .startRecom .cont .left{
    flex:1;
  }
  .startRecom .cont .right{
    margin-left: 15px;
    flex:4;
  }
  .teachRecom .cont .first-box div:nth-child(5n+1) {
    margin-left: 0;
  }
  .teachRecom .cont .teach-item{
    margin-top: 15px;
    margin-bottom: 20px;
    position: relative;
    width: 18.8%;
    margin-left: 1.5%;
    float: left;
  }
  .teachRecom .cont .teach-item .lab {
    position: absolute;
    background: url(./../assets/widget-learNumIco.png) no-repeat;
    width: 84px;
    line-height: 22px;
    height: 24px;
    color: #ff7c2d;
    font-size: 12px;
    top: 10px;
    right: -1px;
    z-index: 9;
  }
  .teachRecom .cont .teach-item .teach-info {
    text-align: left;
    padding: 10px;
    color: #fff;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    bottom: 0px;
    height: 112px;
  }
  .teachRecom .cont .teach-item ul:hover{
    transition: 500ms;
    height: 94% !important;
  }
  .teachRecom ul, .teachRecom li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .teachRecom img{
    display: inherit;
  }
  .clearfix{
    clear: both;
  }
</style>
