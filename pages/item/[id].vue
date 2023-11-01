<template>
  <MainLayout>
    <div
      id="ItemPage"
      class="mt-4 md:-mt-2 max-w-[1440px] mx-auto px-4"
    >
      <div class="lg:flex gap-4 justify-between mx-auto w-full">
        <div class="lg:w-[40%] mb-4 w-[100%]">
          <div class="grid sm:grid-flow-col sm:gap-4">
            <div
              v-if="images[0] !== ''"
              class="grid items-start justify-center overflow-y-auto max-h-[500px] pr-1 -mr-2 sm:max-h-[560px] sm:w-[120px]"
            >
              <div
                v-for="image in images"
                :key="image.id"
              >
                <img
                  @mouseover="currentImage = image"
                  @click="currentImage = image"
                  class="rounded-md border-[1px] cursor-pointer bg-cover w-full mb-1 object-contain sm:w-[100px] sm:h-[130px]"
                  :class="currentImage === image ? 'border-[#000]' : ''"
                  :src="image"
                />
              </div>
            </div>
            <div>
              <img
                v-if="currentImage"
                class="rounded-lg w-[100%] h-[560px] object-contain bg-white sm:flex hidden"
                :src="currentImage"
              />
            </div>
          </div>
        </div>
        <div class="lg:w-[60%] bg-white p-3 rounded-lg mb-4">
          <div v-if="product && product.data">
            <p class="md-2 text-xl text-[#252525] font-bold">
              {{ product.data.title }}
            </p>
            <p class="font-light mb-2 text-md text-[#252525] font-semibold">
              {{ product.data.description }}
            </p>

            <div class="flex items-center pt-1.5">
              <span class="h-8 w-8 rounded-full bg-[#FFD000] mr-2 text-center">
                <Icon
                  name="ic:baseline-star"
                  size="20"
                />
              </span>
              <p class="text-[#a10000]">Extra 5% off</p>
            </div>

            <div class="flex items-center justify-start my-2">
              <Icon
                name="ic:baseline-star"
                color="#a10000"
              />
              <Icon
                name="ic:baseline-star"
                color="#a10000"
              />
              <Icon
                name="ic:baseline-star"
                color="#a10000"
              />
              <Icon
                name="ic:baseline-star"
                color="#a10000"
              />
              <Icon
                name="ic:baseline-star"
                color="#a10000"
              />
              <span class="text-[13px] font-light ml-2"
                >5 213 Reviews 1,000+ orders</span
              >
            </div>

            <div class="border-b" />

            <div class="flex items-center justify-start gap-2 my-2">
              <div class="text-xl font-bold">$ {{ priceComputed }}</div>
              <span
                class="bg-[#f2f2f2] border-2 border-[#11feed] text-xs font-semibold rounded-md p-1.5"
                >70% off</span
              >
            </div>

            <p class="text-[#0f6922] text-xs font-semibold pt-1">
              Free 11-day delivery over $ 8.28
            </p>

            <p class="text-[#0f6922] text-xs font-semibold pt-1">
              Free Shipping
            </p>

            <div class="py-2" />
            <button
              @click="addToCart()"
              :disabled="isInCart"
              class="btn bg-[#2aed0b] font-semibold bg-gradient-to-r from-[#ddfeed] to-[#11feed]"
            >
              <span>
                <div v-if="isInCart">Is Added</div>
                <div v-else>Add to Cart</div>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white p-3 rounded-lg">
        <div v-if="images[0] !== ''">
          <p class="md-2 text-xl text-[#252525] font-bold">Specifications</p>
          <p class="text-[13px] font-light">Quantity in the package</p>
          <p class="text-[13px] font-light">Type of packaging</p>
          <p class="text-[13px] font-light">type</p>
          <p class="text-[13px] font-light">Technology</p>
          <p class="text-[13px] font-light">Service life</p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

const route = useRoute()

const product = ref(null)
let currentImage = ref(null)

onBeforeMount(async () => {
  product.value = await useFetch(
    `/api/prisma/get-product-by-id/${route.params.id}`
  )
})

watchEffect(() => {
  if (product.value && product.value.data) {
    currentImage.value = product.value.data.url
    images.value[0] = product.value.data.url
    userStore.isLoading = false
  }
})

const isInCart = computed(() => {
  let res = false
  userStore.cart.forEach((prod) => {
    if (route.params.id == prod.id) {
      res = true
    }
  })
  return res
})

const priceComputed = computed(() => {
  if (product.value && product.value.data) {
    return product.value.data.price / 100
  }
  return '0.00'
})

const images = ref([
  '',
  'https://dummyimage.com/516x688.png/2aed0b/000',
  'https://dummyimage.com/516x688.png/2aff0b/000',
  'https://dummyimage.com/516x688.png/2aedff/000',
  'https://dummyimage.com/516x688.png/71feed/000',
  'https://dummyimage.com/516x688.png/9eeeed/000',
  'https://dummyimage.com/516x688.png/2aed0b/000',
  'https://dummyimage.com/516x688.png/ddfeed/000',
])

const addToCart = () => {
  userStore.cart.push(product.value.data)
}
</script>
