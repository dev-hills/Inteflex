<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, watchEffect } from 'vue'
import CTAComp from '@/components/HomeViewComponents/CTAComp.vue'
import FooterComp from '@/components/HomeViewComponents/FooterComp.vue'
import { productData } from '../../utils/Products'

const route = useRoute()
const productName = ref(route.params.productname)

watchEffect(() => {
  productName.value = route.params.productname
})

const productTitle = computed(() => {
  const titles = {
    'agro-chemicals': 'Agro Chemicals',
    plastics: 'Plastics',
    food: 'Food',
    'oil-field': 'Oil Field',
    'water-treatment': 'Water Treatment',
  }
  return titles[productName.value] || ''
})
</script>

<template>
  <main>
    <main class="px-[112px] sm:px-[20px] z-[1000] pt-[170px] sm:pt-[150px] py-[41px] w-[100%]">
      <h1 class="text-[40px] font-bold text-[#2E3192] capitalize">
        {{ productTitle }}
      </h1>

      <div class="flex flex-col gap-[40px] mt-[20px]">
        <div>
          <div
            class="w-[100%] flex flex-row flex-wrap sm:flex-nowrap gap-y-[50px] items-center gap-[48px] sm:gap-[10px] pt-[20px] overflow-x-auto scrollbar-hide"
          >
            <div v-for="(item, index) in productData[productName]" :key="index">
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
        </div>
      </div>

      <div class="mt-[120px] mb-[77px]">
        <CTAComp />
      </div>
    </main>

    <FooterComp />
  </main>
</template>
