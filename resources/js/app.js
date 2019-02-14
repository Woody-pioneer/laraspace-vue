/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
import router from './router.js'
import utils from './helpers/utilities'
import ThemeSwitcher from './components/ThemeSwitcher'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import { createI18n, getAutoLang } from './helpers/i18n'

require('./bootstrap')
Vue.use(BootstrapVue)
Vue.prototype.$utils = utils

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
async function main () {
  const locale = getAutoLang()
  const i18n = await createI18n(locale)
  await store.dispatch('init')
  const app = new Vue({
    router,
    i18n, // Inject i18n into the app
    store,
    // Theme Swiching Demo Component (You can remove it if not required)
    components: {
      ThemeSwitcher
    }
  }).$mount('#app')
}
main()
