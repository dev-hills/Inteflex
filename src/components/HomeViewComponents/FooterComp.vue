<script>
import FBIcon from '../icons/FBIcon.vue'
import TwitterIcon from '../icons/TwitterIcon.vue'
import IGIcon from '../icons/IGIcon.vue'

export default {
  components: {
    FBIcon,
    TwitterIcon,
    IGIcon,
  },
}
</script>

<template>
  <div class="w-[100%] bg-[#2E3192] mt-[54px] pb-[37px] flex flex-col items-center justify-center">
    <img src="@/assets/logo.svg" alt="" class="bg-white py-[21px] px-[15px]" />

    <h3 class="text-white font-normal text-[16px] leading-[32px] text-center w-[50%]">
      At Inteflex Global, we are committed to delivering high-performance chemical solutions that
      drive innovation and sustainability across industries. With a global reach and a focus on
      quality, we empower businesses to achieve their goals and improve operations.
    </h3>

    <div class="flex flex-row items-center gap-[60px] mt-[40px]">
      <p class="font-normal text-white text-[15px] cursor-pointer">Home</p>
      <p class="font-normal text-white text-[15px] cursor-pointer">About Us</p>
      <p class="font-normal text-white text-[15px] cursor-pointer">Contact Us</p>
      <p class="font-normal text-white text-[15px] cursor-pointer">Our Products</p>
      <p class="font-normal text-white text-[15px] cursor-pointer">FAQs</p>
    </div>

    <div class="mt-[50px] flex flex-row items-center gap-[40px]">
      <FBIcon />
      <TwitterIcon />
      <IGIcon />
    </div>

    <div
      class="mt-[21px] text-white text-[16px] font-normal whitespace-nowrap flex items-center gap-[5px]"
    >
      Built by Phoenixdevs with
      <span>
        <WhiteHeart />
      </span>
      in Lagos. Copyright 2025
    </div>
  </div>
</template>
