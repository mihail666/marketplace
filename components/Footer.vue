<template>
  <div
    id="FooterMain"
    class="w-full bg-[#E8E8E8] mt-10"
  >
    <div
      class="max-w-[1440px] mx-auto px-4 grid gap-6 pt-10 pb-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
    >
      <div class="">
        <NuxtLink
          to="/"
          class="min-w-[180px]"
        >
          <img
            width="180"
            src="/marketplace-logo.png"
            class="hover:grayscale-200 hover:brightness-200 transition-[1s] duration-300 ease-out -ml-2"
          />
        </NuxtLink>
        <p class="">
          We offer the best electric cars of <br />
          the most recognized brands in <br />
          the world.
        </p>
      </div>

      <div>
        <h3 class="text-lg font-semibold">Company</h3>

        <ul class="flex flex-col row-gap-4">
          <li>
            <a
              href="#"
              class="hover:text-sky-400"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-sky-400"
              >Poducts</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-sky-400"
              >History</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-sky-400"
              >Shop</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">Information</h3>

        <ul class="flex flex-col row-gap-4">
          <li>
            <a
              href="#"
              class="hover:text-sky-400"
              >Request a quote</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-sky-400"
              >Find a company</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-sky-400"
              >Contact us</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-sky-400"
              >Services</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">Follow us</h3>

        <ul class="flex flex-col row-gap-4">
          <li>
            <a
              href="https://t.me/MadoneFR"
              target="_blank"
              rel="noopener"
              class="hover:text-sky-400"
            >
              telegram
            </a>
          </li>
          <li>
            <a
              href="mailto:f1l1ppovmr@gmail.com"
              target="_blank"
              rel="noopener"
              class="hover:text-sky-400"
            >
              gmail
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mihail666"
              target="_blank"
              rel="noopener"
              class="hover:text-sky-400"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </div>
    <span class="block text-center pb-10"> FMR. All rigths reserved </span>
  </div>
</template>

<script setup></script>
