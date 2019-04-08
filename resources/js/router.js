import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/common/Home'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import {loadLanguageAsync} from './helpers/i18n'

Vue.use(VueRouter)

const routes = [

  //  DEFAULT ROUTE
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  // product
  { path: '/product/:id', component: Home }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  let i18 = router.app.$options.i18n
  loadLanguageAsync(i18, 'home')
  return next()
})

export default router
