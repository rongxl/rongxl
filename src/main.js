// 导入vue和APP.vue
import Vue from 'vue'
import App from './App.vue'

// 导入饿了么UI(轮播图)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入css样式
import './assets/statics/site/css/style.css'

// 连接页面
import detail from './components/detail.vue'
import index from './components/index.vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 抽取axios到全局
import axios from 'axios'
Vue.prototype.$axios=axios;

// 抽取axios基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899';

// 定义全局过滤器
import moment from 'moment'
Vue.filter('formatTime',(value)=>{
  return moment(value).format('YYYY年MM月DD日')
})

// 路由规则
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

// 实例化路由对象
const router = new VueRouter({
routes})

// Vue实例
new Vue({ 
  render: h => h(App),
router}).$mount('#app')
