export default {
  state: {
    list: [1, 2, 3]
  },
  mutations: {
    changeList (state, {number}) {
      state.list.push(number)
    }
  },
  getters: {
    setList (state) {
      return state.list + 2
    }
  },
  actions: {

  }
}
