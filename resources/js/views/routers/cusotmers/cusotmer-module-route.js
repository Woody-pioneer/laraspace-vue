/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */

// Dashboard
import Basic from '../../admin/dashboard/Basic.vue'
// Layouts
import LayoutHorizontal from '../../layouts/LayoutHorizontal.vue'
import LayoutIconSidebar from '../../layouts/LayoutIconSidebar.vue'
import LayoutLogin from '../../layouts/LayoutLogin.vue'
import LayoutLogin2 from '../../layouts/LayoutLogin2.vue'
import LayoutLogin3 from '../../layouts/LayoutLogin3.vue'
import LayoutFront from '../../layouts/LayoutFront.vue'



/*
 |--------------------------------------------------------------------------
 | Other
 |--------------------------------------------------------------------------|
 */

// Auth
import Login from '../../auth/Login.vue'
import Register from '../../auth/Register.vue'

import NotFoundPage from '../../errors/404.vue'

/*
 |--------------------------------------------------------------------------
 | Frontend Views
 |--------------------------------------------------------------------------|
 */

import Home from '../../front/Home.vue'

export default [

  /*
   |--------------------------------------------------------------------------
   | Layout Routes for DEMO
   |--------------------------------------------------------------------------|
   */
  {
    path: '/admin/layouts',
    component: LayoutHorizontal,
    children: [
      {
        path: 'horizontal',
        component: Basic
      }
    ]
  },
  {
    path: '/admin/layouts',
    component: LayoutIconSidebar,
    children: [
      {
        path: 'icons-sidebar',
        component: Basic
      }
    ]
  },

  /*
   |--------------------------------------------------------------------------
   | Frontend Routes
   |--------------------------------------------------------------------------|
   */

  {
    path: '/',
    component: LayoutFront,
    children: [
      {
        path: '/',
        component: Home,
        name: 'home'
      }
    ]
  },
  /*
   |--------------------------------------------------------------------------
   | Auth & Registration Routes
   |--------------------------------------------------------------------------|
   */

  {
    path: '/',
    component: LayoutLogin,
    children: [
      {
        path: 'login',
        component: Login,
        name: 'login'
      },
      {
        path: 'register',
        component: Register,
        name: 'register'
      }
    ]
  },

  // Demo Pages
  {
    path: '/admin/pages',
    component: LayoutLogin,
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      }
    ]
  },
  {
    path: '/admin/pages',
    component: LayoutLogin2,
    children: [
      {
        path: 'login-2',
        component: Login
      },
      {
        path: 'register-2',
        component: Register
      }
    ]
  },
  {
    path: '/admin/pages',
    component: LayoutLogin3,
    children: [
      {
        path: 'login-3',
        component: Login
      },
      {
        path: 'register-3',
        component: Register
      }
    ]
  },
  //  DEFAULT ROUTE
  { path: '*', component: NotFoundPage }
]
