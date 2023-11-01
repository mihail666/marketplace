<template>
  <MainLayout>
    <div
      id="IndexPage"
      class="mt-4 md:-mt-2 max-w-[1440px] mx-auto px-4"
    >
      <div
        v-if="products"
        class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-1 gap-y-8 justify-center"
      >
        <div
          v-for="product in products.data"
          :key="product"
        >
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

let products = ref(null)
onBeforeMount(async () => {
  products.value = await useFetch('/api/prisma/get-all-products')
  setTimeout(() => (userStore.isLoading = false), 1000)
})
</script>
