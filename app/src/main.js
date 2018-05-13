// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// Vue.config.productionTip = false
global.BaseServerUrl = 'http://localhost:4000'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: BaseServerUrl,
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Install the vue plugin

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  provide: apolloProvider.provide(),
  render: h => h(App),
})
