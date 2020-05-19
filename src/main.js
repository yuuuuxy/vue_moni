import Vue from 'vue/dist/vue.esm.js'
import routes from './routes'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
const app = new Vue({
  el: '#app',
  router,
})
