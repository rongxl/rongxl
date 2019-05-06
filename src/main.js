import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import './assets/statics/site/css/style.css'

import VueRouter from 'vue-router'

import detail from './components/detail.vue'

Vue.use(VueRouter)
Vue.use(ElementUI);

import index from './components/index.vue'

import axios from 'axios'
Vue.prototype.$axios=axios;

axios.defaults.baseURL = 'http://111.230.232.110:8899';


const routes = [
  {
    path: '/index',
    component: index
  },
  {
    path: '/',
    redirect:'/index'
  },
  {
    path: '/detail/:id',
    component: detail
  }
]

const router = new VueRouter({
routes})

new Vue({ 
  render: h => h(App),
router}).$mount('#app')
