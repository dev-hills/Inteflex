<script setup lang="ts">
import FooterComp from '@/components/HomeViewComponents/FooterComp.vue'
import { productData } from '../../utils/Products'
import CTAComp from '@/components/HomeViewComponents/CTAComp.vue';
</script>

<template>
  <main>
    <main class="px-[112px] sm:px-[20px] z-[1000] pt-[170px] sm:pt-[150px] py-[41px] w-[100%]">
      <h1 class="text-[40px] font-bold text-[#2E3192]">Our Products</h1>

      <div class="flex flex-col gap-[40px] mt-[20px]">
        <div>
          <h2 class="text-[40px] text-[#18191F] font-bold">Agro Chemicals</h2>

          <div
            class="w-[100%] flex flex-row items-center gap-[48px] sm:gap-[10px] pt-[20px] overflow-x-auto scrollbar-hide"
          >
            <div v-for="(item, index) in productData.agroChemicals.slice(0, 3)" :key="index">
              <div
                class="pt-[24px] px-[24px] sm:px-[15px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[326px] sm:w-[100%] h-[275px] object-cover"
                />

                <div class="mt-[32px]">
                  <p class="font-medium text-[14px] text-[#1A906B]">{{ item.category }}</p>

                  <h1
                    class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]"
                  >
                    {{ item.title }}
                  </h1>

                  <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-[1px] border-black w-[160px] px-[44px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px]"
          >
            View More
          </div>
        </div>

        <div>
          <h2 class="text-[40px] text-[#18191F] font-bold">Plastics</h2>

          <div
            class="w-[100%] flex flex-row items-center gap-[48px] sm:gap-[10px] pt-[20px] overflow-x-auto scrollbar-hide"
          >
            <div v-for="(item, index) in productData.plastics.slice(0, 3)" :key="index">
              <div
                class="pt-[24px] px-[24px] sm:px-[15px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[326px] sm:w-[100%] h-[275px] object-cover"
                />

                <div class="mt-[32px]">
                  <p class="font-medium text-[14px] text-[#1A906B]">{{ item.category }}</p>

                  <h1
                    class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]"
                  >
                    {{ item.title }}
                  </h1>

                  <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-[1px] border-black w-[160px] px-[44px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px]"
          >
            View More
          </div>
        </div>

        <div>
          <h2 class="text-[40px] text-[#18191F] font-bold">Food</h2>

          <div
            class="w-[100%] flex flex-row items-center gap-[48px] sm:gap-[10px] pt-[20px] overflow-x-auto scrollbar-hide"
          >
            <div v-for="(item, index) in productData.food.slice(0, 3)" :key="index">
              <div
                class="pt-[24px] px-[24px] sm:px-[15px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[326px] sm:w-[100%] h-[275px] object-cover"
                />

                <div class="mt-[32px]">
                  <p class="font-medium text-[14px] text-[#1A906B]">{{ item.category }}</p>

                  <h1
                    class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]"
                  >
                    {{ item.title }}
                  </h1>

                  <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-[1px] border-black w-[160px] px-[44px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px]"
          >
            View More
          </div>
        </div>

        <div>
          <h2 class="text-[40px] text-[#18191F] font-bold">Oil Field</h2>

          <div
            class="w-[100%] flex flex-row items-center gap-[48px] sm:gap-[10px] pt-[20px] overflow-x-auto scrollbar-hide"
          >
            <div v-for="(item, index) in productData.oilField.slice(0, 3)" :key="index">
              <div
                class="pt-[24px] px-[24px] sm:px-[15px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[326px] sm:w-[100%] h-[275px] object-cover"
                />

                <div class="mt-[32px]">
                  <p class="font-medium text-[14px] text-[#1A906B]">{{ item.category }}</p>

                  <h1
                    class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]"
                  >
                    {{ item.title }}
                  </h1>

                  <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-[1px] border-black w-[160px] px-[44px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px]"
          >
            View More
          </div>
        </div>

        <div>
          <h2 class="text-[40px] text-[#18191F] font-bold">Water Treatment</h2>

          <div
            class="w-[100%] flex flex-row items-center gap-[48px] sm:gap-[10px] pt-[20px] overflow-x-auto scrollbar-hide"
          >
            <div v-for="(item, index) in productData.waterTreatment.slice(0, 3)" :key="index">
              <div
                class="pt-[24px] px-[24px] sm:px-[15px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[326px] sm:w-[100%] h-[275px] object-cover"
                />

                <div class="mt-[32px]">
                  <p class="font-medium text-[14px] text-[#1A906B]">{{ item.category }}</p>

                  <h1
                    class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]"
                  >
                    {{ item.title }}
                  </h1>

                  <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-[1px] border-black w-[160px] px-[44px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px]"
          >
            View More
          </div>
        </div>
      </div>

      <div class="mt-[120px] mb-[77px]">
        <CTAComp />
      </div>
    </main>

    <FooterComp />
  </main>
</template>
