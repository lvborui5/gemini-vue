import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default () => {
  Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./loading1.gif'),
    loading: require('./loading.gif'),
    attempt: 1,
    lazyComponent: true
  })
}
