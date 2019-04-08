import axios from 'axios'
import Ls from '../../services/ls'
export default {
  namespaced: true,
  state () {
    return {
      language: null
    }
  },
  getters: {
    language: state => state.language
  },
  mutations: {
    language (state, locale) {
      state.language = locale
    }
  },

  actions: {
    async init ({commit, dispatch}) {
      let locale = Ls.get('language')
      if (locale) {
        commit('language', JSON.parse(locale))
      } else {
        const response = await axios.get(`http://opbasicservice.bonnetech.net/api/v1/languages/1`)
        commit('language', response.data.data)
        Ls.set('language', JSON.stringify(response.data.data))
      }
    },
    async changeLanguage ({commit, dispatch}, data) {
      try {
        const response = await axios.get(`http://opbasicservice.bonnetech.net/api/v1/languages/${data}`)
        commit('language', response.data.data)
        Ls.set('language', JSON.stringify(response.data.data))
        return response
      } catch (error) {
        console.log('Error', error.message)
      }
    }
  }
}
