<template>
  <div>
    <b-container class="bv-example-row mt-4">
      <b-row>
        <b-col
          v-for="(data, index) in list"
          :key="index"
          cols="12"
          md="4"
          lg="3"
          sm="6"
        >
          <card-list
            class="mb-4"
            :title="data.title"
            :image="data.image"
            @click="showDetail(data.title)"
          />
        </b-col>
      </b-row>
      <modal-detail
        v-model="modal"
        title="Detail Sub Breed"
        :data="detailSubBreeds"
      />
    </b-container>
  </div>
</template>

<script>
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  useStore,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import CardList from '@/components/CardList.vue'
import ModalDetail from '@/components/ModalDetail.vue'

export default defineComponent({
  components: {
    CardList,
    ModalDetail,
  },
  setup() {
    const store = useStore()
    const { $overlay } = useContext()
    const list = ref([])

    function listDataBreeds() {
      store.dispatch('getListBreeds').then((res) => {
        if (res) {
          const data = store.getters.getBreeds

          data.map((breed) => {
            return setImageBreed(breed)
          })
        }
      })
    }

    async function setImageBreed(breed) {
      await store.dispatch('getBreedImageRandom', breed).then((res) => {
        if (res) {
          const result = {
            title: breed,
            image: store.getters.getBreedImage,
          }
          list.value = [...list.value, result]
        }
      })
    }

    onBeforeMount(async () => {
      await listDataBreeds()
    })

    const modal = ref(false)
    const detailSubBreeds = ref([])

    function showDetail(data) {
      $overlay(true)
      listDataSubBreeds(data)
    }

    function listDataSubBreeds(data) {
      detailSubBreeds.value = []
      store.dispatch('getSubBreeds', data).then((res) => {
        if (res) {
          const response = store.getters.getSubBreeds
          if (response.length > 0) {
            response.map((result) => {
              const params = {
                breed: data,
                subBreed: result,
              }
              return setImageSubBreed(params)
            })
          } else {
            modal.value = true
            $overlay(false)
          }
        }
      })
    }

    async function setImageSubBreed(params) {
      await store.dispatch('getSubBreedImageRandom', params).then((res) => {
        if (res) {
          const result = {
            title: params.subBreed,
            image: store.getters.getSubBreedImage,
          }
          detailSubBreeds.value = [...detailSubBreeds.value, result]
          if (detailSubBreeds.value.length > 0) {
            modal.value = true
            $overlay(false)
          }
        }
      })
    }

    onMounted(() => {})

    return {
      list,
      modal,
      showDetail,
      detailSubBreeds,
    }
  },
})
</script>
