<script setup lang="ts">
import HalfCircleOne from '../icons/HalfCircleOne.vue'
import HalfCircleTwo from '../icons/HalfCircleTwo.vue'
</script>

<template>
  <main class="pt-[90px] w-[100%]">
    <div>
      <h1 class="text-[#141414] text-[48px] font-semibold text-center">Our Values</h1>
      <p class="font-medium text-[16px] text-[#1E1E1E] text-center mt-[28px]">
        We are guided by principles that define who we are and what we stand for
      </p>
    </div>

    <div class="mt-[66px] flex flex-row flex-wrap items-center justify-center gap-[16px] gap-y-[20px]">
      <div class="w-[376px] h-[256px] p-[20px] rounded-[10px] bg-[#D1D2E738]">
        <h1 class="text-[#2E3192] font-medium text-[34px] w-fit relative p-1">
          <HalfCircleOne class="absolute bottom-0" />
          01
        </h1>

        <h2 class="my-[20px] text-[#141414] font-medium text-[24px]">Innovation</h2>

        <p class="text-[#1E1E1E] font-normal text-[16px] leading-[26px]">
          Pioneering advancements in chemical technology to create cutting-edge solutions.
        </p>
      </div>

      <div
        class="w-[376px] h-[256px] p-[20px] rounded-[10px] bg-[#F7FDF9] border-[1px] border-[#F2F2F2]"
      >
        <h1 class="text-[#2E3192] font-medium text-[34px] w-fit relative p-1">
          <HalfCircleTwo class="absolute bottom-0" />
          02
        </h1>

        <h2 class="my-[20px] text-[#141414] font-medium text-[24px]">Sustainability</h2>

        <p class="text-[#1E1E1E] font-normal text-[16px] leading-[26px]">
          Developing eco-friendly solutions for a better tomorrow while prioritizing environmental
          responsibility.
        </p>
      </div>

      <div class="w-[376px] h-[256px] p-[20px] rounded-[10px] bg-[#D1D2E738]">
        <h1 class="text-[#2E3192] font-medium text-[34px] w-fit relative p-1">
          <HalfCircleOne class="absolute bottom-0" />
          03
        </h1>

        <h2 class="my-[20px] text-[#141414] font-medium text-[24px]">Quality</h2>

        <p class="text-[#1E1E1E] font-normal text-[16px] leading-[26px]">
          Ensuring superior standards in every product and service through rigorous quality control.
        </p>
      </div>

      <div
        class="w-[376px] h-[256px] p-[20px] rounded-[10px] bg-[#F7FDF9] border-[1px] border-[#F2F2F2]"
      >
        <h1 class="text-[#2E3192] font-medium text-[34px] w-fit relative p-1">
          <HalfCircleTwo class="absolute bottom-0" />
          04
        </h1>

        <h2 class="my-[20px] text-[#141414] font-medium text-[24px]">Integrity</h2>

        <p class="text-[#1E1E1E] font-normal text-[16px] leading-[26px]">
          Upholding trust and transparency in all our dealings to foster honest relationships.
        </p>
      </div>

      <div class="w-[376px] h-[256px] p-[20px] rounded-[10px] bg-[#D1D2E738]">
        <h1 class="text-[#2E3192] font-medium text-[34px] w-fit relative p-1">
          <HalfCircleOne class="absolute bottom-0" />
          05
        </h1>

        <h2 class="my-[20px] text-[#141414] font-medium text-[24px]">Customer-Centric Approach</h2>

        <p class="text-[#1E1E1E] font-normal text-[16px] leading-[26px]">
          Placing clients at the heart of our operations by offering tailored solutions that meet
          their unique needs.
        </p>
      </div>
    </div>
  </main>
</template>
