import Vue from 'vue'
import App from './App.vue'
import store from './store/root'

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
