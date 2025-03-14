<script setup lang="ts">
import FooterComp from '@/components/HomeViewComponents/FooterComp.vue'
import { productData } from '../../utils/Products'
import CTAComp from '@/components/HomeViewComponents/CTAComp.vue'
import { ref, onMounted } from 'vue'

// Create a reactive object to track loading state for each product category and index
const imageLoading = ref({
  'agro-chemicals': {},
  plastics: {},
  food: {},
  'oil-field': {},
  'water-treatment': {},
})

// Initialize all images as loading
onMounted(() => {
  Object.keys(productData).forEach((category) => {
    productData[category].forEach((_, index) => {
      if (!imageLoading.value[category]) {
        imageLoading.value[category] = {}
      }
      imageLoading.value[category][index] = true
    })
  })
})

// Function to handle image load events
const handleImageLoaded = (category, index) => {
  imageLoading.value[category][index] = false
}
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
            <div v-for="(item, index) in productData['agro-chemicals'].slice(0, 3)" :key="index">
              <div
                class="pt-[24px] px-[24px] sm:px-[15px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
              >
                <div class="relative w-[326px] sm:w-full h-[275px]">
                  <!-- Skeleton loader -->
                  <div
                    v-if="imageLoading['agro-chemicals'][index]"
                    class="absolute inset-0 bg-gray-200 animate-pulse rounded"
                  ></div>

                  <!-- Actual image -->
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                    :class="{ 'opacity-0': imageLoading['agro-chemicals'][index] }"
                    @load="handleImageLoaded('agro-chemicals', index)"
                  />
                </div>

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
            @click="$router.push(`/products/agro-chemicals`)"
            class="border-[1px] border-black w-[160px] px-[25px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px] cursor-pointer"
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
                <div class="relative w-[326px] sm:w-full h-[275px]">
                  <!-- Skeleton loader -->
                  <div
                    v-if="imageLoading['plastics'][index]"
                    class="absolute inset-0 bg-gray-200 animate-pulse rounded"
                  ></div>

                  <!-- Actual image -->
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                    :class="{ 'opacity-0': imageLoading['plastics'][index] }"
                    @load="handleImageLoaded('plastics', index)"
                  />
                </div>

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
            @click="$router.push(`/products/plastics`)"
            class="border-[1px] border-black w-[160px] px-[25px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px] cursor-pointer"
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
                <div class="relative w-[326px] sm:w-full h-[275px]">
                  <!-- Skeleton loader -->
                  <div
                    v-if="imageLoading['food'][index]"
                    class="absolute inset-0 bg-gray-200 animate-pulse rounded"
                  ></div>

                  <!-- Actual image -->
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                    :class="{ 'opacity-0': imageLoading['food'][index] }"
                    @load="handleImageLoaded('food', index)"
                  />
                </div>

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
            @click="$router.push(`/products/food`)"
            class="border-[1px] border-black w-[160px] px-[25px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px] cursor-pointer"
          >
            View More
          </div>
        </div>

        <div>
          <h2 class="text-[40px] text-[#18191F] font-bold">Oil Field</h2>

          <div
            class="w-[100%] flex flex-row items-center gap-[48px] sm:gap-[10px] pt-[20px] overflow-x-auto scrollbar-hide"
          >
            <div v-for="(item, index) in productData['oil-field'].slice(0, 3)" :key="index">
              <div
                class="pt-[24px] px-[24px] sm:px-[15px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
              >
                <div class="relative w-[326px] sm:w-full h-[275px]">
                  <!-- Skeleton loader -->
                  <div
                    v-if="imageLoading['oil-field'][index]"
                    class="absolute inset-0 bg-gray-200 animate-pulse rounded"
                  ></div>

                  <!-- Actual image -->
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                    :class="{ 'opacity-0': imageLoading['oil-field'][index] }"
                    @load="handleImageLoaded('oil-field', index)"
                  />
                </div>

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
            @click="$router.push(`/products/oil-field`)"
            class="border-[1px] border-black w-[160px] px-[25px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px] cursor-pointer"
          >
            View More
          </div>
        </div>

        <div>
          <h2 class="text-[40px] text-[#18191F] font-bold">Water Treatment</h2>

          <div
            class="w-[100%] flex flex-row items-center gap-[48px] sm:gap-[10px] pt-[20px] overflow-x-auto scrollbar-hide"
          >
            <div v-for="(item, index) in productData['water-treatment'].slice(0, 3)" :key="index">
              <div
                class="pt-[24px] px-[24px] sm:px-[15px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
              >
                <div class="relative w-[326px] sm:w-full h-[275px]">
                  <!-- Skeleton loader -->
                  <div
                    v-if="imageLoading['water-treatment'][index]"
                    class="absolute inset-0 bg-gray-200 animate-pulse rounded"
                  ></div>

                  <!-- Actual image -->
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                    :class="{ 'opacity-0': imageLoading['water-treatment'][index] }"
                    @load="handleImageLoaded('water-treatment', index)"
                  />
                </div>

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
            @click="$router.push(`/products/water-treatment`)"
            class="border-[1px] border-black w-[160px] px-[25px] py-[12px] text-[14px] rounded-[8px] flex items-center justify-center mx-auto mt-[40px] cursor-pointer"
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

<style scoped>
.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
