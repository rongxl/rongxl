import Vue from 'vue'
import App from './App.vue'
import './assets/statics/site/css/style.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import index from './components/index.vue'

const routes = [
  {
    path: '/index',
    component: index
  }
]

const router = new VueRouter({
routes})

new Vue({ 
  render: h => h(App),
router}).$mount('#app')
