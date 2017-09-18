import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      background: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/212200/72140546ab66eba298c1959b9fd4324cf4c0635f.jpg',
      backgrounds: [],
      nextRandomBackgrounds: []
    },
    mutations: {
      setBackground (state, background) {
        state.background = background
      },
      setBackgrounds (state, backgrounds) {
        state.backgrounds = backgrounds
        state.nextRandomBackgrounds.push(state.backgrounds[Math.floor(state.backgrounds.length * Math.random())])
      },
      randomBackground (state) {
        state.background = state.nextRandomBackgrounds.shift().steamUrl
        while (state.nextRandomBackgrounds.length < 3) {
          state.nextRandomBackgrounds.push(state.backgrounds[Math.floor(state.backgrounds.length * Math.random())])
        }
      }
    }
  })
}

export default createStore
