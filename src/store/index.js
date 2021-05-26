import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addInPaymentsListData (state, payload) {
      state.paymentsList.push(payload)
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList
        .reduce((res, cur) => res + cur.price, 0)
    }
  },
  actions: {
    addInList ({ commit }, payload) {
      commit('addInPaymentsListData', payload)
    },
    fetchData ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i < 15; i++) {
            items.push({
              date: new Date().toISOString().split('T')[0],
              type: 'Education',
              amount: i
            })
          }
          resolve(items)
        }, 2000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
  }
})