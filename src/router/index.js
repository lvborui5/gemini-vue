import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const helloWorld = r => require.ensure([], () => r(require('../pages/HelloWorld')), 'HelloWorld')

export default new Router({
  routes: [
    {
      path: '/',
      component: helloWorld
    }
  ]
})
