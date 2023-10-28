<template>
  <MainLayout>
    <div
      id="SuccessPage"
      class="mt-4 md:-mt-2 max-w-[1440px] mx-auto px-2 min-h-[58vh]"
    >
      <div class="bg-white w-full p-6 min-h-[150px] rounded-lg">
        <div class="flex items-center text-xl font-bold">
          <Icon
            class="mt-5"
            name="clarity:success-standard-line"
            color="#2aed0b"
            size="35"
          />
          <span class="pl-4">Payment Successful</span>
        </div>
        <p class="text-md pl-[50px]">Thank you! We've received your payment.</p>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 300)
})
</script>
