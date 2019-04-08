import axios from 'axios'
import Ls from '../../services/ls'
import toastr from 'toastr'

export default {
  namespaced: true,

  state () {
    return {
      user: null
    }
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    user (state, user) {
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
        Ls.set('auth.token', response.data.token)
        toastr['success']('Logged In!', 'Success')
        commit('user', response.data.user)
        Ls.set('user', JSON.stringify(response.data.user))
        return response.data.token
      } catch (error) {
        if (error.response.status === 401) {
          toastr['error']('Invalid Credentials', 'Error')
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
      }
    },

    async logout ({commit, dispatch}) {
      try {
        await axios.get('/api/auth/logout')
        Ls.remove('auth.token')
        Ls.remove('user')
        commit('setUser', null)
        toastr['success']('Logged out!', 'Success')
      } catch (error) {
        console.log('Error', error.message)
      }
    },
    async check () {
      let response = await axios.get('/api/auth/check')

      return !!response.data.authenticated
    }
  }
}
