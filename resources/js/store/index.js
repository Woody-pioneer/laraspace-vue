import Vue from 'vue'
import Vuex from 'vuex'
import Cart from './modules/cart'
import Auth from './modules/auth'
import Language from './modules/language'
import Currency from './modules/currency'
import Product from './modules/product'
import Products from './modules/products'
Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async init ({commit, dispatch}) {
      // locale
      dispatch('Language/init')
      // currency
      dispatch('Currency/init')
      // auth
      dispatch('Auth/init')
    }
  },
  modules: {
    Cart,
    Auth,
    Language,
    Currency,
    Product,
    Products
  },
  strict: process.env.NODE_ENV !== 'production'
})
