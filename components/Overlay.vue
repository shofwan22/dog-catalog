<template>
  <b-overlay :show="overlay" no-wrap fixed> </b-overlay>
</template>

<script>
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseOverlay',
  setup() {
    const store = useStore()

    const overlay = computed({
      get() {
        return store.getters.getOverlay
      },
      set(val) {
        return store.commit('SET_OVERLAY', val)
      },
    })

    function start() {
      overlay.value = true
    }

    function finish() {
      overlay.value = false
    }

    return {
      overlay,
      start,
      finish,
    }
  },
})
</script>
