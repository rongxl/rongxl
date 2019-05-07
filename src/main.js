// 导入vue和APP.vue
import Vue from 'vue'
import App from './App.vue'

// 导入饿了么UI(轮播图)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入css样式
import './assets/statics/site/css/style.css'

// 连接页面
import index from './components/index.vue'
import detail from './components/detail.vue'
import centerContainer from './components/centerContainer.vue'
import info from './components/info.vue'
import theTradeOrder from './components/theTradeOrder.vue'
import theTraderDetails from './components/theTraderDetails.vue'
import register from './components/register.vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 抽取axios到全局
import axios from 'axios'
Vue.prototype.$axios = axios

// 抽取axios基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899'

// 定义全局过滤器
import moment from 'moment'
Vue.filter('formatTime', (value) => {
  return moment(value).format('YYYY年MM月DD日')
})

// 路由规则
const routes = [
  // 主页
  {
    path: '/index',
    component: index
  },
  // 重定向主页
  {
    path: '/',
    redirect: '/index'
  },
  // 主页详情页
  {
    path: '/detail/:id',
    component: detail
  },
  // 会员中心容器
  {
    path: '/centerContainer',
    component: centerContainer,
    children: [

      // 会员中心鼓励师
      {
        path: 'info',
        component: info
      },

      // 会员中心重定向鼓励师
      {
        path: '',
        redirect: 'info'
      },

      // 交易订单
      {
        path: 'theTradeOrder',
        component: theTradeOrder
      },

      // 订单详情
      {
        path: '/theTraderDetails',
        component: theTraderDetails
      }
    ]
  },

  //登录
  {
    path:'/register',
    component:register
  }
]

// 实例化路由对象
const router = new VueRouter({
routes})

// Vue实例
new Vue({
  render: h => h(App),
router}).$mount('#app')
