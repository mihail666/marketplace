<template>
  
  <div
    id="MainLayout"
    class="w-full fixed z-30"
  >
    <div
      id="TopMenu"
      class="w-full bg-[#F2F2F2] border-b md:block hidden"
    >
      <ul
        class="flex items-center justify-end text-xs text-[#333333] font-light px-4 h-10 bg-[#F2F2F2] max-w-[1440px] mx-auto"
      >
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#11feed] cursor-pointer font-semibold transition-[1s] duration-300 ease-out"
        >
          Sell on Marketplace
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#11feed] cursor-pointer font-semibold transition-[1s] duration-300 ease-out"
        >
          Cookie Preferences
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#11feed] cursor-pointer font-semibold transition-[1s] duration-300 ease-out"
        >
          Help
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#11feed] cursor-pointer font-semibold transition-[1s] duration-300 ease-out"
        >
          Buyer Protection
        </li>
        <li
          class="px-3 hover:text-[#11feed] cursor-pointer font-semibold transition-[1s] duration-300 ease-out"
        >
          <Icon
            name="ic:sharp-install-mobile"
            size="17"
          />
          App
        </li>
        <li
          @mouseenter="isAccoutMenu = true"
          @mouseleave="isAccoutMenu = false"
          class="relative w-[200px] flex items-center px-3 hover:text-[#11feed] h-full cursor-pointer transition-[1s] duration-300 ease-out"
          :class="
            isAccoutMenu
              ? 'bg-white z-40 shadow-[0px_15px_150px_20px_rgba(0,0,0,0.5)] drop-shadow-md'
              : ''
          "
        >
          <Icon
            name="ci:user-02"
            class="font-bold"
            size="17"
          />
          <div class="ml-3 font-bold">Account</div>
          <Icon
            name="mdi:chevron-down"
            size="15"
            class="absolute right-[10px]"
          />
          <div
            id="AccountMenu"
            v-if="isAccoutMenu"
            class="absolute bg-white w-[200px] text-[#333333] z-40 top-[38px] -left-[0px] rounded-b-lg"
          >
            <div v-if="!user">
              <div class="text-semibold text-[14px] my-4 px-3 font-bold">
                Welcome on Marketplace!
              </div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink
                  to="/auth"
                  class="btn text-darck font-semibold bg-gradient-to-r from-[#ddfeed] to-[#11feed]"
                >
                  <span>Login / Register</span>
                </NuxtLink>
              </div>
            </div>
            <div class="border-b" />
            <ul class="bg-white rounded-b-lg">
              <li
                @click="navigateTo('/orders')"
                class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 font-semibold"
              >
                <div class="flex items-center text-[14px] font-semibold">
                  <Icon
                    name="ph:pen-light"
                    size="20"
                  />
                  <span class="pl-4">My Orders</span>
                </div>
              </li>

              <li
                @click="goTo('shoppingcart')"
                class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100 cursor-pointer"
              >
                <div class="flex items-center text-[14px] font-semibold">
                  <Icon
                    name="ph:shopping-cart-simple-light"
                    size="20"
                  />
                  <span class="pl-4">Cart</span>
                </div>
                <div
                  class="flex items-center justify-center bg-[#FF4646] h-[20px] min-w-[20px] text-md text-white rounded-full"
                >
                  {{ userStore.cart.length }}
                </div>
              </li>

              <li
                v-if="user"
                @click="client.auth.signOut()"
                class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 hover:rounded-b-lg font-semibold"
              >
                <div class="flex items-center text-[14px] font-semibold">
                  <Icon
                    name="ph:sign-out-light"
                    size="20"
                  />
                  <span class="pl-4">Sign out</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="MainHeader"
      class="flex items-center w-full bg-white drop-shadow-md z-40"
    >
      <div
        class="flex lg:justify-start justify-between gap-10 max-w-[1440px] w-full p-2 mx-auto"
      >
        <NuxtLink
          to="/"
          class="min-w-[180px]"
        >
          <img
            width="180"
            src="/marketplace-logo.png"
            class="hover:grayscale-200 hover:brightness-200 transition-[1s] duration-300 ease-out"
          />
        </NuxtLink>

        <div class="mt-auto mb-auto max-w-[700px] w-full md:block hidden">
          <div class="relative">
            <div
              class="flex items-center border-2 border-[#11feed] rounded-md w-full"
            >
              <input
                class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                placeholder="search..."
                type="text"
                v-model="searchItem"
              />
              <Icon
                v-if="isSearching"
                name="eos-icons:loading"
                size="20"
                class="mr-2"
              />
              <button
                class="flex items-center h-[100%] p-1.5 px-2 bg-[#11feed] hover: cursor-pointer"
              >
                <Icon
                  name="ph:magnifying-glass"
                  size="20"
                  class="transition-[1s] duration-300 ease-out hover:scale-125"
                />
              </button>
            </div>

            <div
              v-if="items && items.data"
              class="absolute bg-white max-w-[700px] h-auto w-full"
            >
              <div
                v-for="item in items.data"
                :key="item.id"
                class="p-1"
              >
                <NuxtLink
                  :to="`/item/${item.id}`"
                  class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                >
                  <div class="flex items-center">
                    <img
                      class="rounded-md"
                      width="40"
                      :src="item.url"
                    />
                    <div class="truncate ml-2">{{ item.title }}</div>
                  </div>
                  <div class="truncate pr-1">$ {{ item.price / 100 }}</div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <nuxt-link
          to="/shoppingcart"
          class="flex items-center"
        >
          <button
            class="relative md:block hidden"
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
          >
            <span
              class="absolute flex items-center justify-center -right-[6px] top-[2px] bg-[#11feed] h-[18px] min-w-[17px] text-xs rounded-full"
            >
              {{ userStore.cart.length }}
            </span>
            <div class="nim-w-[40px] transition-[1s] duration-300 ease-out">
              <Icon
                name="solar:bag-3-broken"
                size="33"
                :class="
                  isHover
                    ? ' transition-[1s] duration-300 ease-out text-[#11feed] '
                    : ''
                "
              />
            </div>
          </button>
        </nuxt-link>

        <button
          @mouseenter="isHover = true"
          @mouseleave="isHover = false"
          @click="userStore.isMenuOverlay = true"
          class="md:hidden block rounded-full p-1 -mt-[1px]"
        >
          <Icon
            name="radix-icons:hamburger-menu"
            size="33"
            :class="
              isHover
                ? ' transition-[1s] duration-300 ease-out text-[#11feed] '
                : ''
            "
          />
        </button>
      </div>
    </div>
  </div>

  <Loading v-if="userStore.isLoading" />

  <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
  <slot />

  <Footer v-if="!userStore.isLoading" />
</template>

<script setup>
import { watch } from 'vue'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

const client = useSupabaseClient()
const user = useSupabaseUser()

let isAccoutMenu = ref(false)
let searchItem = ref('')
let isSearching = ref(false)
let isHover = ref(false)
let items = ref('')

const seachByName = useDebounce(async () => {
  isSearching.value = true
  items.value = await useFetch(`/api/prisma/search-by-name/${searchItem.value}`)
  isSearching.value = false
}, 100)

watch(
  () => searchItem.value,
  async () => {
    if (!searchItem.value) {
      setTimeout(() => {
        items.value = ''
        isSearching.value = false
        return
      }, 500)
    }
    seachByName()
  }
)
</script>
