import Ls from '../../services/ls'
import axios from 'axios'

export default {
  namespaced: true,

  state () {
    return {
      currency: null
    }
  },

  getters: {
    currency: state => state.currency
  },

  mutations: {
    currency (state, value) {
      state.currency = value
    }
  },

  actions: {
    async init ({commit, dispatch}) {
      let currency = Ls.get('currency')
      if (currency) {
       commit('currency', JSON.parse(currency))
      } else {
        const response = await axios.get(`http://opbasicservice.bonnetech.net/api/v1/currencies/1`)
        commit('currency', response.data.data)
        Ls.set('currency', JSON.stringify(response.data.data))
      }
    },
    async changeCurrency ({commit, dispatch}, data) {
      try {
        const response = await axios.get(`http://opbasicservice.bonnetech.net/api/v1/currencies/${data}`)
        commit('currency', response.data.data)
        Ls.set('currency', JSON.stringify(response.data.data))
      } catch (error) {
        console.log('Error', error.message)
      }
    }
  }
}
