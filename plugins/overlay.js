import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(({ store }, inject) => {
  inject('overlay', (val) => {
    store.commit('SET_OVERLAY', val)
  })
})
