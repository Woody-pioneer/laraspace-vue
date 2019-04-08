import http from '../../services/http'

export default {
  namespaced: true,
  state () {
    return {
      products: [
        {
          'id': 1,
          'title': 'Blue Socks',
          'price': 2.99,
          'originalPrice': 3.99,
          'rating': 4.3,
          'image': 'http://lorempixel.com/400/400/abstract/1/'
        },
        {
          'id': 2,
          'title': 'Green Socks',
          'price': 3.99,
          'rating': 3.9,
          'image': 'http://lorempixel.com/400/400/abstract/2/'
        },
        {
          'id': 3,
          'title': 'Red Socks',
          'price': 3.99,
          'rating': 4,
          'image': 'http://lorempixel.com/400/400/abstract/3/'
        },
        {
          'id': 4,
          'title': 'Blue Shirt',
          'price': 16.99,
          'originalPrice': 19.99,
          'rating': 3.4,
          'image': 'http://lorempixel.com/400/400/abstract/4/'
        },
        {
          'id': 5,
          'title': 'Green Shirt',
          'price': 19.99,
          'rating': 4.2,
          'image': 'http://lorempixel.com/400/400/abstract/5/'
        },
        {
          'id': 6,
          'title': 'Red Shirt',
          'price': 19.99,
          'rating': 4.1,
          'image': 'http://lorempixel.com/400/400/abstract/6/'
        },
        {
          'id': 7,
          'title': 'Grey Shirt',
          'price': 6.99,
          'originalPrice': 19.99,
          'rating': 2.6,
          'image': 'http://lorempixel.com/400/400/abstract/7/'
        },
        {
          'id': 8,
          'title': 'Black Backpack',
          'price': 39.99,
          'rating': 4.7,
          'image': 'http://lorempixel.com/400/400/abstract/8/'
        }
      ],
      loading: false,
      searchText: ''
    }
  },

  getters: {
    products: state => {
      if (state.searchText) {
        const reg = new RegExp(state.searchText.trim().toLowerCase().replace(/\s+/g, '|'))
        return state.products.filter(
          product => product.title.toLowerCase().search(reg) !== -1
        )
      } else {
        return state.products
      }
    },
    productsMap: state => state.products.reduce((obj, product) => {
      obj[product.id] = product
      return obj
    }, {}),
    loading: state => state.loading,
    searchText: state => state.searchText
  },

  mutations: {
    products (state, value) {
      state.products = value
    },
    loading (state, value) {
      state.loading = value
    },
    searchText (state, value) {
      state.searchText = value
    }
  },

  actions: {
    async fetchProducts ({ commit }) {
      commit('loading', true)
      const result = await http.get('products')
      commit('products', result.data)
      commit('loading', false)
    },

    setSearchText ({ commit }, value) {
      commit('searchText', value)
    }
  }
}
