<script setup>
import WaterIcon from '../components/icons/WaterIcon.vue'
import FoodIcon from '../components/icons/FoodIcon.vue'
import PlasticIcon from '../components/icons/PlasticIcon.vue'
import AgroIcon from '../components/icons/AgroIcon.vue'
import OilIcon from '../components/icons/OilIcon.vue'
const arrayData = [
  {
    icon: WaterIcon,
    title: 'Water',
    description:
      'Delivering advanced chemicals to purify water, ensuring clean and safe water for industries and communities.',
  },
  {
    icon: FoodIcon,
    title: 'Food',
    description:
      'Ensuring food safety and quality with innovative chemical solutions for processing, preservation, and packaging.',
  },
  {
    icon: PlasticIcon,
    title: 'Plastics',
    description:
      'Enabling the creation of durable, flexible, and high-performance plastic materials for diverse applications.',
  },
  {
    icon: AgroIcon,
    title: 'Agro',
    description:
      'Supporting modern agriculture with solutions that boost crop yield, improve soil quality, and protect plant health.',
  },
  {
    icon: OilIcon,
    title: 'Oil',
    description:
      ' Optimizing energy production with solutions that enhance refining, processing, and extraction.',
  },
]

console.log(arrayData)
</script>

<template>
  <main class="z-[1000] pt-[200px] py-[41px] px-[112px] w-[100%]">
    <div class="flex flex-row items-center justify-between gap-[100px] w-[100%]">
      <div>
        <h1 class="text-[#2E2E2E] font-bold text-[48px] leading-[72px]">
          Innovating Chemistry, Empowering Industry
        </h1>
        <p class="text-[#555555] font-medium text-[16px] leading-[28px] tracking-[5%] my-[32px]">
          From nourishing crops to purifying water, powering industries to shaping plastics,
          chemistry is the force behind progress. At Inteflex, we provide the expertise and products
          that fuel innovation across food, oil, agriculture, plastics, and water sectors.
        </p>
        <div class="flex flex-row items-center gap-[20px]">
          <button
            class="bg-[#2E3192] text-white font-normal text-[14px] px-[20px] py-[10px] rounded-[8px]"
          >
            Explore Our Products
          </button>
          <button
            class="bg-transparent border-[1px] border-black text-black font-normal text-[14px] px-[41px] py-[10px] rounded-[8px]"
          >
            Contact us
          </button>
        </div>
      </div>
      <img src="@/assets/homeImg.svg" alt="" />
    </div>

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
        <div v-for="(item, index) in arrayData" :key="index">
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

    <div class="pt-[140px]">
      <div class="flex flex-row items-center gap-[60px] justify-between">
        <img src="@/assets/logo.svg" alt="" class="w-[570px]" />

        <div class="w-[45%]">
          <h1 class="text-[48px] text-[#18191F] font-bold">What We Do</h1>
          <p class="font-medium text-[18px] text-[#555555] leading-[30px]my-[9px]">
            At Inteflex Global, we specialize in creating and delivering high-performance chemical solutions that empower industries to achieve their goals. From raw material sourcing and product formulation to technical support and supply chain management, we provide end-to-end solutions tailored to meet the unique demands of our clients. Our expertise spans various sectors, ensuring that each product not only meets but exceeds industry standards. Whether it’s driving innovation, enhancing productivity, or promoting sustainability, we’re here to make a difference.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
