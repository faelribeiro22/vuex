import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import Categories from './modules/categories/main'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    Categories
  }
})
