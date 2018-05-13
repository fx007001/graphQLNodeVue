import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    state:{
      uid:'aaa',
      name: 'admin',
      utoken: 'kj98ojkl8ulhuiykh8'
    },
    mutations:{

    },
    getters:{
      uid: state => state.uid,
      name: state => state.name,
      utoken: state => state.utoken,
    }
  }
})
