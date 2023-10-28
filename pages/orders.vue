<template>
  <MainLayout>
    <div
      id="OrdersPage"
      class="mt-4 md:-mt-2 max-w-[1440px] mx-auto px-2 min-h-[58vh]"
    >
      <div class="bg-white w-full p-6 min-h-[150px] rounded-lg">
        <div class="flex items-center text-xl">
          <Icon
            name="carbon:delivery"
            color="#2aed0b"
            size="35"
          />
          <span class="text-xl font-bold pl-4">Orders</span>
        </div>

        <section v-if="orders && orders.data">
          <div
            v-for="order in orders.data"
            :key="order.id"
            class="text-md pl-[50px]"
          >
            <div class="border-b py-4">
              <p>
                <span class="text-md font-bold">ID:</span> {{ order.stripeId }}
              </p>

              <div class="pt-2"></div>

              <div
                v-for="item in order.orderItem"
                :key="item.id"
              >
                <NuxtLink
                  class="flex items-center gap-3 p-1 hover:underline hover:text-blue-500"
                  :to="`/item/${item.productId}`"
                >
                  <img
                    class="rounded-lg w-[100px] h-[100px] object-contain bg-white"
                    :src="item.product.url"
                  />
                  {{ item.product.title }}
                </NuxtLink>
              </div>

              <div class="pt-2 pb-4">
                <span class="text-md font-bold"> Delivery Address:</span>
                {{ order.name }}, {{ order.address }}, {{ order.zipcode }},
                {{ order.city }}, {{ order.country }}
              </div>
            </div>
          </div>
        </section>
        <section
          v-else
          class="flex items-center justify-center"
        >
          You have no order history
        </section>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
const user = useSupabaseUser()

let orders = ref(null)

onBeforeMount(async () => {
  orders.value = await useFetch(
    `/api/prisma/get-orders-by-user/${user.value.id}`
  )
})

onMounted(() => {
  if (!user.value) {
    return navigateTo('/auth')
  }

  setTimeout(() => (userStore.isLoading = false), 200)
})
</script>
