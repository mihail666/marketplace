<template>
  <div class="flex justify-start my-1 sm:p-2">
    <img
      class="rounded-lg w-[150px] h-[150px] object-contain bg-white"
      :src="product.url"
    />

    <div class="owerflow-hidden pl-2">
      <div class="flex items-center">
        <div class="truncate pr-2 text-xl font-bold">{{ product.title }}</div>
        <span
          class="bg-[#FFD000] text-[9px] truncate rounded-lg p-1 font-semibold"
          >Welcome Deal</span
        >
      </div>

      <div class="text-lg font-semibold mt-1">
        $ <span class="font-bold">{{ product.price / 100 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['product'])
const { product } = toRefs(props)
</script>
