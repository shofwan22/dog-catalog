export const state = () => ({
  overlay: false,
  breeds: [],
  breedImage: '',
  subBreeds: [],
  subBreedImage: '',
})

export const mutations = {
  SET_OVERLAY(state, overlay) {
    state.overlay = overlay
  },
  SET_BREEDS(state, breeds) {
    state.breeds = breeds
  },
  SET_BREED_IMAGE(state, breedImage) {
    state.breedImage = breedImage
  },
  SET_SUBBREEDS(state, subBreeds) {
    state.subBreeds = subBreeds
  },
  SET_SUBBREED_IMAGE(state, subBreedImage) {
    state.subBreedImage = subBreedImage
  },
}

export const actions = {
  getListBreeds({ commit }) {
    return this.$axios
      .get('/api-dog/breeds/list/all')
      .then((res) => {
        commit('SET_BREEDS', Object.keys(res.data.message))
        return true
      })
      .catch((err) => {
        return err
      })
  },
  getBreedImageRandom({ commit }, params) {
    return this.$axios
      .get(`/api-dog/breed/${params}/images/random`)
      .then((res) => {
        commit('SET_BREED_IMAGE', res.data.message)
        return true
      })
      .catch((err) => {
        return err
      })
  },
  getSubBreeds({ commit }, params) {
    return this.$axios
      .get(`/api-dog/breed/${params}/list`)
      .then((res) => {
        commit('SET_SUBBREEDS', res.data.message)
        return true
      })
      .catch((err) => {
        return err
      })
  },
  getSubBreedImageRandom({ commit }, params) {
    return this.$axios
      .get(`/api-dog/breed/${params.breed}/${params.subBreed}/images/random`)
      .then((res) => {
        commit('SET_SUBBREED_IMAGE', res.data.message)
        return true
      })
      .catch((err) => {
        return err
      })
  },
}

export const getters = {
  getOverlay(state) {
    return state.overlay
  },
  getBreeds(state) {
    return state.breeds
  },
  getBreedImage(state) {
    return state.breedImage
  },
  getSubBreeds(state) {
    return state.subBreeds
  },
  getSubBreedImage(state) {
    return state.subBreedImage
  },
}
