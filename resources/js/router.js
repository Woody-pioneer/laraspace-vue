import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/common/Home'

Vue.use(VueRouter)

const routes = [

  //  DEFAULT ROUTE
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  //  If the next route is requires user to be Logged IN
      return next()
})

export default router
