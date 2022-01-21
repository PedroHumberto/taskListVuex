import Vue from 'vue'
import App from './App.vue'
import store from './store/root'
import { routes } from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
