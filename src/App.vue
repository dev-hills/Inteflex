<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PhoneIcon from './components/icons/PhoneIcon.vue'

const route = useRoute()
const isLoaded = ref(false)
const imageCount = ref(0)
const totalImages = ref(0)
const router = useRouter()

const isActiveRoute = (path) =>
  computed(() => {
    if (path === '/products') {
      return route.path.startsWith('/products') || route.path.startsWith('/product/')
    }
    return route.path === path
  })

const showNav = ref(false)

const checkImagesLoaded = () => {
  imageCount.value++
  if (imageCount.value >= totalImages.value) {
    isLoaded.value = true
  }
}

const loadImages = () => {
  isLoaded.value = false
  imageCount.value = 0
  const images = document.querySelectorAll('img')
  totalImages.value = images.length

  if (totalImages.value === 0) {
    isLoaded.value = true
  } else {
    images.forEach((img) => {
      if (img.complete) {
        checkImagesLoaded()
      } else {
        img.addEventListener('load', checkImagesLoaded)
        img.addEventListener('error', checkImagesLoaded)
      }
    })
  }
}

watch(router.currentRoute, () => {
  loadImages()
})

loadImages()
</script>

<template>
  <main class="relative">
    <div v-if="!isLoaded" class="flex items-center justify-center h-screen">
      <img src="@/assets/logo.svg" alt="logo" />
      <p class="text-lg font-semibold">Loading...</p>
    </div>

    <nav
      class="bg-white w-[100%] flex flex-row items-center justify-between py-[41px] sm:py-[20px] px-[112px] sm:px-[20px] fixed z-[100]"
    >
      <RouterLink to="/">
        <img src="@/assets/logo.svg" alt="logo" />
      </RouterLink>

      <div class="sm:hidden flex flex-row items-center gap-[30px]">
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

      <div @click="showNav = !showNav" class="hidden sm:flex sm:flex-col sm:gap-[5px]">
        <div class="w-[40px] h-[4px] bg-[#2E3192]"></div>
        <div class="w-[40px] h-[4px] bg-[#2E3192]"></div>
        <div class="w-[40px] h-[4px] bg-[#2E3192]"></div>
      </div>
    </nav>

    <div :class="showNav ? `block` : `hidden`">
      <div class="fixed bg-white w-[100%] z-[1000] mt-[90px] py-[30px]">
        <div class="flex flex-col items-center gap-[30px]">
          <RouterLink
            to="/"
            class="font-semibold text-[15px] text-black px-[12px] pb-[4px]"
            :class="{
              'border-[2px] border-[#0EB0F1] border-x-0 border-t-0': isActiveRoute('/').value,
              '': !isActiveRoute('/').value,
            }"
            @click="showNav = false"
            >Home</RouterLink
          >
          <RouterLink
            to="/about"
            class="font-semibold text-[15px] text-black px-[12px] pb-[4px]"
            :class="{
              'border-[2px] border-[#0EB0F1] border-x-0 border-t-0': isActiveRoute('/about').value,
              '': !isActiveRoute('/about').value,
            }"
            @click="showNav = false"
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
            @click="showNav = false"
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
            @click="showNav = false"
            >Contact Us</RouterLink
          >
        </div>
      </div>
    </div>

    <RouterView />
  </main>
</template>
