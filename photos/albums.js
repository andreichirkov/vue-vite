export const albums = {
  namespaced: true,

  state() {
    return {
      all: []
    }
  },

  mutations: {
    setAlbums(state, albums) {
      state.all = albums
    }
  },

  actions: {
    async fetch(ctx) {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums')
      const json = await res.json()

      console.log(json)

      ctx.commit('setAlbums', json)
    }
  }
}
