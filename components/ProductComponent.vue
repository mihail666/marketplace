<template>
  <div
    :id="`ProductComponent${product.id}`"
    class="bg-white inline-block rounded transition-[2s] hover:drop-shadow-md cursor-pointer"
  >
    <NuxtLink :to="`/item/${product.id}`">
      <div class="p-3 bg-white rounded-lg w-[270px] h-[450px]">
        <img
          class="rounded-t w-[200px] max-h-[230px] object-contain bg-white mx-auto mb-4"
          :src="product.url"
        />
        <div id="ProductDetails">
          <p class="px-1 pt-0.5 text-lg text-[#252525] font-semibold">
            {{ product.title.substring(0, 60) }}
          </p>
          <span class="flex items-center justify-start gap-3 px-1">
            <span class="font-semibold">$ {{ priceComputed }}</span>
            <span class="text-gray-500 line-through font-semibold"
              >$ {{ oldPriceComputed }}</span
            >
          </span>

          <span class="px-1 text-[#a10000] text-xs font-semibold">
            Extra 5% off
          </span>

          <div class="flex items-center gap-1 px-1 my-1">
            <span
              class="bg-[#11feed] border-2 border-[#11feed] text-xs font-semibold p-1 rounded-md"
              >Welcome Deal</span
            >
            <span
              class="bg-[#f2f2f2] border-2 border-[#11feed] text-xs font-semibold p-1 rounded-md"
              >Top Selling</span
            >
          </div>

          <p
            class="flex items-center px-1 pt-0.5 text-xs text-[#252525] font-semibold"
          >
            5,000+ sold
            <Icon
              name="material-symbols:star-rate"
              color="#757575"
              class="ml-1.5"
            />
            4.7
          </p>

          <p class="px-1 pb-1">
            <span class="text-[#0f6922] text-xs font-semibold"
              >Free Shipping</span
            >
          </p>
        </div>
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
