import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

//配置Vuex
const store = new Vuex.Store({
  state: {
    count:0
  },
  //添加的商品元素
  addCartEl: {},
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

//配置Vue-router
const router = new VueRouter({
  routes: [{
    path: '/goods',
    component: goods
  }, 
  {
    path: '/ratings',
    component: ratings
  }, {
    path: '/seller',
    component: seller
  }],
  linkActiveClass: 'active'
})

//配置Vue
new Vue({
  router,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue() //组件之间的通信介质
  }
}).$mount('#app')

router.push('goods')