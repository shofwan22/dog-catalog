<template>
  <b-modal
    :id="id"
    v-model="show"
    centered
    :title="title"
    :size="size"
    hide-footer
  >
    <b-carousel
      v-if="data.length > 0"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="(detail, index) in data" :key="index">
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="480"
            :src="detail.image"
            alt="image slot"
          />
        </template>
        <h1>{{ detail.title }}</h1>
      </b-carousel-slide>
    </b-carousel>
    <div v-else class="d-block text-center">
      <h3>Sub Breed Is Empty</h3>
    </div>
  </b-modal>
</template>

<script>
import { defineComponent, computed, ref, toRef } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: Boolean,
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'lg',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const model = toRef(props, 'value')
    const show = computed({
      get() {
        return model.value
      },
      set(value) {
        emit('input', value)
      },
    })

    const slide = ref(0)
    const sliding = ref(null)

    function onSlideStart(slide) {
      sliding.value = true
    }

    function onSlideEnd(slide) {
      sliding.value = true
    }

    return {
      show,
      slide,
      sliding,
      onSlideStart,
      onSlideEnd,
    }
  },
})
</script>
