<script setup>
import { industriesData } from '../../../utils/industriesData'
</script>

<template>
  <div class="pt-[140px]">
    <div class="flex flex-row items-center gap-[100px] justify-between">
      <div class="w-[40%]">
        <h1 class="text-[48px] text-[#18191F] font-bold">Who We Are</h1>
        <p class="font-medium text-[18px] text-[#555555] leading-[30px]my-[9px]">
          At Inteflex Global, we are redefining the role of chemicals in transforming industries.
          From nourishing crops and purifying water to advancing energy and shaping plastics, our
          solutions fuel innovation and drive progress worldwide.
        </p>
      </div>

      <img src="@/assets/logo.svg" alt="" class="w-[570px]" />
    </div>

    <div class="flex flex-row items-center gap-[48px] justify-center pt-[140px]">
      <div v-for="(item, index) in industriesData" :key="index">
        <div
          class="bg-[#FBFBFB] w-[214px] rounded-[8px] py-[16px] px-[8px] flex flex-col items-center gap-[16px] h-[200px]"
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
