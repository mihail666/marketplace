<template>
  <div class="flex justify-start my-1 sm:p-2">
    <div class="my-auto">
      <div
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        class="flex items-center justify-start p-0.5 cursor-poiter transition-[1s] duration-300 ease-out"
      >
        <div
          @click="isSelected = !isSelected"
          class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-3 cursor-poiter transition-[1s] duration-300 ease-out"
          :class="[
            isHover ? 'border-[#2aed0b]' : 'border-gray-800',
            isSelected ? 'border-none bg-[#2aed0b]' : '',
          ]"
        >
          <div class="h-[8px] w-[8px] rounded-full bg-white"></div>
        </div>
      </div>
    </div>

    <img
      class="rounded-lg max-w-[130px] max-h-[170px] object-contain p-1"
      :src="product.url"
    />

    <div class="overflow-hidden p-2 w-full">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center justify-between truncate">
          <div class="truncate sm:pr-1 text-xl font-bold">
            {{ product.title }}
          </div>
          <span
            class="sm:block hidden bg-[#FFD000] text-[9px] truncate rounded-lg p-1 font-semibold"
            >Welcome Deal</span
          >
        </div>

        <button
          @click="removeFromCart()"
          class="sm:block hidden mt-0.5 hover:text-red-500"
        >
          <Icon
            name="material-symbols:delete-outline"
            size="20"
          />
        </button>
      </div>

      <div class="text-xl font-semibold">
        $ <span class="font-bold">{{ product.price / 100 }}</span>
      </div>

      <p class="text-[#0f6922] text-xs font-semibold pt-1">
        Free 11-day delivery over $ 8.28
      </p>

      <p class="text-[#0f6922] text-xs font-semibold pt-1">Free Shipping</p>

      <div class="flex items-center justify-end">
        <button
          @click="removeFromCart()"
          class="sm:hidden block -mt-0.5 hover:text-red-500"
        >
          <Icon
            name="material-symbols:delete-outline"
            size="20"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

const props = defineProps(['product', 'selectedArray'])
const { product, selectedArray } = toRefs(props)

const emit = defineEmits(['selectedRadio'])

let isHover = ref(false)
let isSelected = ref(false)

const removeFromCart = () => {
  userStore.cart.forEach((prod, index) => {
    if (prod.id == product.value.id) {
      userStore.cart.splice(index, 1)
    }
  })
}

watch(
  () => isSelected.value,
  (val) => {
    emit('selectedRadio', { id: product.value.id, val: val })
  }
)
</script>
