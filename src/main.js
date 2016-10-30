import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: App},
    {path: '/home', component: Home},
    {
      path: '/time-entries',
      component: TimeEntries,
      children: [
        {
          path: 'log-time', component: LogTime
        }]
    },
    {path: '*', redirect: '/'}
  ]
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router: router,
  data: function () {
    return { totalTime: 1.5 }
  }
})
