// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Plugins
import VueTyped from 'vue-typed-js'
import { TweenLite } from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueTyped)

Vue.config.productionTip = false

Vue.prototype.$TwinLite = TweenLite

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    AOS.init()
  },
})
