<template>
  <div
    :id="`ProductComponent${product.id}`"
    class="bg-white inline-block rounded transition-[2s] hover:drop-shadow-md cursor-pointer"
  >
    <NuxtLink :to="`/item/${product.id}`">
      <div class="group relative m-2 md:w-[220px] h-full sm:w-full">
        <div class="rounded-lg group-hover:opacity-75 bg-contain">
          <img
            :src="product.url"
            class="rounded-lg object-contain h-80 w-100"
          />
        </div>
        <div class="flex justify-between mt-2 px-2">
          <div>
            <h3
              class="w-[210px] text-sm text-gray-700 truncate overflow-hidden ..."
            >
              {{ product.title.substring(0, 60) }}
            </h3>
          </div>
        </div>
        <span class="flex items-center justify-start gap-3 px-2">
          <span class="font-semibold">$ {{ priceComputed }}</span>
          <span class="text-gray-500 line-through font-semibold"
            >$ {{ oldPriceComputed }}</span
          >
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(['product'])
const { product } = toRefs(props)

const priceComputed = computed(() => {
  return product.value.price / 100
})

const oldPriceComputed = computed(() => {
  let res = (product.value.price + product.value.price / 20) / 100
  return res.toFixed(2)
})
</script>
