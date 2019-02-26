import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters: {
    newList(state) {
      return state.list.map((item, index) => {
        if(index == 0) {
          return item + 'first'
        }else if(index < 3) {
          return item + '+++'
        }else {
          return item+'**'
        }
      })
    }
  },
  mutations: {
    changList(state, {name ,number}) {
      state.list.push(name+number)
    }
  },
  actions: {
    changList(ctx, {name, number}) {
      setTimeout(() => {
        ctx.commit('changList', {name, number})
      }, 2000);
    }
  },
  modules: {
    home
  }
})