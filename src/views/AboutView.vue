<script setup lang="ts">
import MissionVisionComp from '@/components/AboutViewComponents/MissionVisionComp.vue'
import OurValuesComp from '@/components/AboutViewComponents/OurValuesComp.vue'
import CTAComp from '@/components/HomeViewComponents/CTAComp.vue'
import FooterComp from '@/components/HomeViewComponents/FooterComp.vue'
import ProductComp from '@/components/HomeViewComponents/ProductComp.vue'
</script>

<template>
  <main>
    <main class="px-[112px] z-[1000] pt-[200px] py-[41px] w-[100%]">
      <div class="flex flex-row items-center justify-between gap-[100px] w-[100%]">
        <div class="w-[50%]">
          <h1 class="text-[#2E3192] font-bold text-[64px] leading-[64px]">About Us</h1>
          <h2 class="text-[#141414] font-semibold text-[40px] leading-[58px] capitalize my-[20px]">
            Driving <span class="text-[#ED008C] font-bold">innovation</span> through chemistry to
            power industries worldwide.
          </h2>
          <p class="text-[#1E1E1E] font-normal text-[16px] leading-[24px]">
            At Inteflex Global, we specialize in delivering high-quality chemical solutions that
            empower industries to achieve their goals. From agriculture and water treatment to
            plastics, oil, and food industries, our products are designed to meet the unique needs
            of our clients. With a commitment to innovation, sustainability, and strong
            partnerships, we drive progress and create value across the globe.
          </p>
        </div>

        <img src="@/assets/WorldMap.svg" alt="" class="w-[50%]" />
      </div>

      <MissionVisionComp />

      <OurValuesComp />

      <div class="mt-[120px] my-[60px] flex flex-row items-center gap-[53px]">
        <div class="w-[50%]">
          <h1 class="font-semibold text-[48px] text-[#141414]">Meet Our CEO</h1>
          <h2 class="font-semibold text-[30px] text-[#141414] my-[16px]">Tony Osadunkwu</h2>

          <p class="font-medium text-[20px] text-[#1E1E1E]">
            A visionary leader with a relentless drive for excellence, Tony Osadunkwu has
            spearheaded Inteflex Global to become a trusted name in the chemical industry. With
            decades of experience, he combines innovation and strategy to propel the company toward
            global success.
          </p>
        </div>

        <img src="../assets/CEOPlaceholder.svg" alt="" />
      </div>

      <ProductComp />

      <div class="mt-[120px] mb-[77px]">
        <CTAComp />
      </div>
    </main>
    <FooterComp />
  </main>
</template>
