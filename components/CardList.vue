<template>
  <b-card
    :title="title"
    :img-src="image"
    img-alt="Image"
    img-height="200"
    img-top
    align="center"
    class="card"
    @click="$emit('click')"
  >
  </b-card>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'CardList',
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
