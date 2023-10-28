<template>
  <div
    id="AuthPage"
    class="w-full h-[100vh] bg-[#F2F2F2]"
  >
    <div
      class="flex items-center justify-center w-full bg-white drop-shadow-md"
    >
      <div class="flex gap-10 max-w-[1440px] w-full p-2">
        <NuxtLink
          to="/"
          class="min-w-[180px] mx-auto"
        >
          <img
            width="180"
            src="/marketplace-logo.png"
            class="hover:grayscale-200 hover:brightness-200 transition-[1s] duration-300 ease-out"
          />
        </NuxtLink>
      </div>
    </div>

    <div class="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6 font-semibold">Login / Register</div>
      <button
        @click="login('google')"
        class="btn text-darck font-semibold bg-gradient-to-r from-[#ddfeed] to-[#11feed] mb-4 w-full"
      >
        <span class="flex gap-3 items-center justify-center">
          <img
            class="w-full max-w-[30px]"
            src="/google-logo.png"
            alt=""
          />
          Google
        </span>
      </button>

      <button
        @click="login('github')"
        class="btn text-darck font-semibold bg-gradient-to-r from-[#ddfeed] to-[#11feed] mb-4 w-full"
      >
        <span class="flex gap-3 items-center justify-center">
          <img
            class="w-full max-w-[30px]"
            src="/github-logo.png"
            alt=""
          />
          GitHub
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    return navigateTo('/')
  }
})

const login = async (prod) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prod,
  })
}
</script>
