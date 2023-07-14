<template>
  <div>
    <overlay />
    <header-component />
    <nuxt />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import HeaderComponent from '@/components/Header.vue'
import Overlay from '@/components/Overlay.vue'

export default defineComponent({
  components: { HeaderComponent, Overlay },
  setup() {
    return {}
  },
})
</script>
