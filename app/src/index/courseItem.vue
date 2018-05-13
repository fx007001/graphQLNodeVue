<template>
  <div class="courseItem">
    <Header />
    <div>courseItem</div>
    <Footer />
  </div>
</template>
<script>
  import Header from './../components/Header'
  import Footer from './../components/Footer'

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
    name: 'CourseItem',
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
        this.$apollo.mutate({
          // Query
          mutation: getInfo,
          // Parameters
          variables: {
            label: this.newTag,
          }
        }).then(data=>{
          console.log(data)
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    mounted:function(){
      // this.init()
    },
    components:{
      Header,
      Footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .course{

  }
</style>
