export default {
  namespaced: true,
  state () {
    return {
      cartItemList: []
    }
  },

  mutations: {
    updateCart (state, {item, quantity, isAdd}) {
      const record = state.cartItemList.find(element => element.id === item.id)
      if (record) {
        if (isAdd) {
          record.quantity += quantity
        } else {
          record.quantity = quantity
        }
      } else {
        state.cartItemList.push({
          ...item,
          quantity
        })
      }
    },
    setCart (state, productList) {
      if (productList) {
        state.cartItemList = productList
      }
    },
    removeItem (state, {item}) {
      const record = state.cartItemList.find(element => element.id === item.id)
      state.cartItemList.splice(state.cartItemList.indexOf(record), 1)
    }
  },

  actions: {
    clearCart: ({commit}) => {
      commit('setCart', [])
    },
    addCart: ({commit}, data) => {
      console.log('add cart')
      commit('updateCart', data)
    }
  },
  getters: {
    cartItemList: (state) => {
      return state.cartItemList
    },
    cartValue: (state) => {
      let res = 0
      state.cartItemList.map(item => {
        res += item.price * item.quantity
      })
      return res
    }
  }
}
