<script setup>
import { industriesData } from '../../../utils/industriesData'
</script>

<template>
  <div class="pt-[140px]">
    <div class="flex flex-row sm:flex-col items-center gap-[100px] sm:gap-[50px] justify-between">
      <div class="w-[40%] sm:w-[100%]">
        <h1 class="text-[48px] text-[#18191F] font-bold">Who We Are</h1>
        <p class="font-medium text-[18px] text-[#555555] leading-[30px]my-[9px]">
          At Inteflex Global, we are redefining the role of chemicals in transforming industries.
          From nourishing crops and purifying water to advancing energy and shaping plastics, our
          solutions fuel innovation and drive progress worldwide.
        </p>
      </div>

      <img src="@/assets/logo.svg" alt="" class="w-[570px]" />
    </div>

    <div
      class="w-[100%] flex flex-row items-center gap-[48px] sm:gap-[10px]  pt-[140px] sm:pt-[100px] overflow-x-auto scrollbar-hide"
    >
      <div v-for="(item, index) in industriesData" :key="index">
        <div
          class="bg-[#FBFBFB] w-[214px] rounded-[8px] py-[16px] px-[8px] flex flex-col items-center gap-[16px] h-[200px] flex-shrink-0"
        >
          <component :is="item.icon" />
          <h3 class="text-black font-bold text-[20px] text-center">{{ item.title }}</h3>
          <p class="font-light text-[14px] leading-[18px] text-black text-center">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
