import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      background: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/212200/72140546ab66eba298c1959b9fd4324cf4c0635f.jpg'
    },
    mutations: {
      setBackground (state, background) {
        state.background = background
      }
    }
  })
}

export default createStore
