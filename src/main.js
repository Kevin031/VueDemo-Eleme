import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/goods',
    component: goods
  }/*,
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }*/],
  linkActiveClass: 'active'
})

new Vue({
  router,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')

router.push('goods')