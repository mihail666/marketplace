<template>
  <MainLayout>
    <div
      id="ShoppingCartPage"
      class="mt-4 md:-mt-2 max-w-[1440px] min-h-[55.9vh] mx-auto px-4"
    >
      <div
        v-if="!userStore.cart.length"
        class="h-[500px] max-w-[500px] mx-auto"
      >
        <div class="pt-10 grid grid-rows-3 items-center gap-2">
          <div class="text-xl text-center mt-4 font-bold row-span-1">
            Add the necessary products to the basket
          </div>

          <div
            class="text-center text-lg text-[#252525] font-semibold row-span-1"
          >
            And to find them, look in the catalog or in the section with
            discounts
          </div>

          <NuxtLink
            to="/"
            class="btn text-darck font-semibold bg-gradient-to-r from-[#ddfeed] to-[#11feed] mx-auto"
          >
            <span>Go store</span>
          </NuxtLink>

          <div
            v-if="!user"
            class="grid items-center gap-2 text-center row-span-1"
          >
            <div class="text-xl text-center mt-4 font-bold row-span-1">
              Log in to your account
            </div>
            <NuxtLink
              to="/auth"
              class="btn row-span-1 text-darck font-semibold bg-gradient-to-r from-[#ddfeed] to-[#11feed] mx-auto"
            >
              <span>Sign in</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        v-else
        class="md:flex gap-4 justify-between mx-auto w-full"
      >
        <div class="md:w-[65%]">
          <div class="bg-white p-3 rounded-lg">
            <div class="text-xl font-bold mb-2">
              Shopping Cart ({{ userStore.cart.length }})
            </div>
          </div>

          <div
            id="Items"
            class="bg-white p-1 rounded-lg mt-4"
          >
            <div
              v-for="product in userStore.cart"
              :key="product.id"
            >
              <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
              />
            </div>
          </div>
        </div>

        <div class="md:w-[35%]">
          <div
            id="Summary"
            class="bg-white rounded-lg p-3"
          >
            <div class="text-xl font-bold mb-2">Summary</div>
            <div class="flex items-center justify-between my-3">
              <div class="text-xl font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-bold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button
              @click="goToCheckout"
              class="btn font-semibold bg-gradient-to-r from-[#ddfeed] to-[#11feed]"
            >
              <span>Checkout</span>
            </button>
          </div>

          <div
            id="PaymentProtection"
            class="bg-white rounded-lg p-3 mt-6"
          >
            <div class="test-lg font-semibold mb-[18px]">Payment methods</div>
            <div class="flex items-center justify-start gap-8 my-4">
              <div
                v-for="card in cards"
                :key="card.id"
              >
                <img
                  class="h-6"
                  :src="card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
const user = useSupabaseUser()

let selectedArray = ref([])

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200)
})

const cards = ref(['visa.png', 'mastercard.png', 'paypal.png', 'applepay.png'])

const totalPriceComputed = computed(() => {
  let price = 0
  userStore.cart.forEach((prod) => {
    price += prod.price
  })
  return price / 100
})

const selectedRadioFunc = (e) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e)
    return
  }

  selectedArray.value.forEach((item, index) => {
    if (e.id != item.id) {
      selectedArray.value.push(e)
      return
    } else {
      selectedArray.value.splice(index, 1)
    }
  })
}

const goToCheckout = () => {
  let ids = []
  userStore.checkout = []

  selectedArray.value.forEach((item) => ids.push(item.id))

  let res = userStore.cart.filter((item) => {
    return ids.indexOf(item.id) != -1
  })

  res.forEach((item) => userStore.checkout.push(toRaw(item)))

  return navigateTo('/checkout')
}
</script>
