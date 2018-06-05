import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import lazyload from './core/ui/lazyload'
import './resources/scss/index.scss'
import axios from './core/network/axios.js'

lazyload()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  render: h => h(App)
})
