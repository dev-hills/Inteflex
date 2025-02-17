<script setup>
import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import PhoneIcon from './components/icons/PhoneIcon.vue'

const route = useRoute()

watch(() => {
  console.log('Current route:', route.path)
})

const isActiveRoute = (path) => computed(() => route.path === path)
</script>

<template>
  <main class="relative">
    <nav
      class="bg-white w-[100%] flex flex-row items-center justify-between py-[41px] px-[112px] fixed z-[100]"
    >
      <RouterLink to="/">
        <img src="@/assets/logo.svg" alt="Vue logo" />
      </RouterLink>

      <div class="flex flex-row items-center gap-[30px]">
        <div
          class="flex flex-row items-center gap-[30px] border-[1px] border-[#DAD8D8] border-y-0 border-l-0 pr-[40px]"
        >
          <RouterLink
            to="/"
            class="font-semibold text-[15px] text-black px-[12px] pb-[4px]"
            :class="{
              'border-[2px] border-[#0EB0F1] border-x-0 border-t-0': isActiveRoute('/').value,
              '': !isActiveRoute('/').value,
            }"
            >Home</RouterLink
          >

          <RouterLink
            to="/about"
            class="font-semibold text-[15px] text-black px-[12px] pb-[4px]"
            :class="{
              'border-[2px] border-[#0EB0F1] border-x-0 border-t-0': isActiveRoute('/about').value,
              '': !isActiveRoute('/about').value,
            }"
            >About Us</RouterLink
          >

          <RouterLink
            to="/products"
            class="font-semibold text-[15px] text-black px-[12px] pb-[4px]"
            :class="{
              'border-[2px] border-[#0EB0F1] border-x-0 border-t-0':
                isActiveRoute('/products').value,
              '': !isActiveRoute('/products').value,
            }"
            >Products</RouterLink
          >
          <RouterLink
            to="/contact"
            class="font-semibold text-[15px] text-black px-[12px] pb-[4px]"
            :class="{
              'border-[2px] border-[#0EB0F1] border-x-0 border-t-0':
                isActiveRoute('/contact').value,
              '': !isActiveRoute('/contact').value,
            }"
            >Contact Us</RouterLink
          >
        </div>
        <div class="flex flex-row items-center gap-[6px]">
          <PhoneIcon />
          <p class="font-semibold text-[16px] text-black">+2348022539367</p>
        </div>
      </div>
    </nav>

    <RouterView />
  </main>
</template>
