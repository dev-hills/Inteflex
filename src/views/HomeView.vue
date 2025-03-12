<script setup>
import FooterComp from '@/components/HomeViewComponents/FooterComp.vue'
import CTAComp from '@/components/HomeViewComponents/CTAComp.vue'
import ProductComp from '@/components/HomeViewComponents/ProductComp.vue'
import TestimonialComp from '@/components/HomeViewComponents/TestimonialComp.vue'
import WhatWeDoComp from '@/components/HomeViewComponents/WhatWeDoComp.vue'
import WhoWeAreComp from '@/components/HomeViewComponents/WhoWeAreComp.vue'
</script>

<template>
  <main>
    <main class="px-[112px] sm:px-[20px] z-[1000] pt-[200px] sm:pt-[150px] py-[41px] w-[100%]">
      <div class="flex flex-row sm:flex-col items-center justify-between gap-[100px] w-[100%]">
        <div>
          <h1 class="text-[#2E2E2E] font-bold text-[48px] leading-[72px]">
            Innovating Chemistry, Empowering Industry
          </h1>
          <p class="text-[#555555] font-medium text-[16px] leading-[28px] tracking-[5%] my-[32px]">
            From nourishing crops to purifying water, powering industries to shaping plastics,
            chemistry is the force behind progress. At Inteflex, we provide the expertise and
            products that fuel innovation across food, oil, agriculture, plastics, and water
            sectors.
          </p>
          <div class="flex flex-row items-center gap-[20px]">
            <RouterLink to="/products">
              <button
                class="bg-[#2E3192] text-white font-normal text-[14px] px-[20px] py-[10px] rounded-[8px]"
              >
                Explore Our Products
              </button>
            </RouterLink>
            <RouterLink to="/contact">
              <button
                class="bg-transparent border-[1px] border-black text-black font-normal text-[14px] px-[41px] py-[10px] rounded-[8px]"
              >
                Contact us
              </button>
            </RouterLink>
          </div>
        </div>
        <img src="@/assets/homeImg.svg" alt="" />
      </div>

      <WhoWeAreComp />

      <WhatWeDoComp />

      <TestimonialComp />

      <ProductComp />

      <CTAComp />
    </main>

    <FooterComp />
  </main>
</template>
