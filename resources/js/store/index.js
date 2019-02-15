import Vue from 'vue'
import Vuex from 'vuex'
import Ls from '../services/ls'
import axios from 'axios'
import toastr from 'toastr'
Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      user: null
    }
  },
  getters: {
    user: state => state.user,
    userPicture: (state, getters) => {
      const user = getters.user
      if (user) {
        return user.avatar
      }
    }
  },

  mutations: {
    user: (state, user) => {
      state.user = user
    }
  },
  actions: {
    async init ({commit, dispatch}) {
      let user = Ls.get('user')
      if (user) {
        commit('user', JSON.parse(user))
      }
    },
    async login ({commit, dispatch}, data) {
      try {
        let response = await axios.post('/api/auth/login', data)
        commit('user', response.data.user)
        Ls.set('user', JSON.stringify(response.data.user))
        Ls.set('auth.token', response.data.token)
        toastr['success']('Logged In!', 'Success')
        return response.data.token
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
    },

    async logout ({commit, dispatch}) {
      try {
        await axios.get('/api/auth/logout')
        Ls.remove('auth.token')
        Ls.remove('user')
        toastr['success']('Logged out!', 'Success')
      } catch (error) {
        console.log('Error', error.message)
      }
    }
  }
})