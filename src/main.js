import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import './assets/statics/site/css/style.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(ElementUI);

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
