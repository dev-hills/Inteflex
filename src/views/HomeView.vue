<script setup>
import WaterIcon from '../components/icons/WaterIcon.vue'
import FoodIcon from '../components/icons/FoodIcon.vue'
import PlasticIcon from '../components/icons/PlasticIcon.vue'
import AgroIcon from '../components/icons/AgroIcon.vue'
import OilIcon from '../components/icons/OilIcon.vue'
import QuoteMark from '../components/icons/QuoteMark.vue'
import JPNL from '@/components/icons/JPNL.vue'
import KoraneIcon from '@/components/icons/KoraneIcon.vue'
import NadineIcon from '@/components/icons/NadineIcon.vue'
import LeeveOnIcon from '@/components/icons/LeeveOnIcon.vue'
import JrangIcon from '@/components/icons/JrangIcon.vue'
import WhatsappIcon from '@/components/icons/WhatsappIcon.vue'
import TriangleThree from '@/components/icons/TriangleThree.vue'
import TriangleTwo from '@/components/icons/TriangleTwo.vue'
import TriangleOne from '@/components/icons/TriangleOne.vue'
import FBIcon from '@/components/icons/FBIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import IGIcon from '@/components/icons/IGIcon.vue'
import WhiteHeart from '@/components/icons/WhiteHeart.vue'

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
  <main>
    <main class="px-[112px] z-[1000] pt-[200px] py-[41px] w-[100%]">
      <div class="flex flex-row items-center justify-between gap-[100px] w-[100%]">
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
              At Inteflex Global, we are redefining the role of chemicals in transforming
              industries. From nourishing crops and purifying water to advancing energy and shaping
              plastics, our solutions fuel innovation and drive progress worldwide.
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
              At Inteflex Global, we specialize in creating and delivering high-performance chemical
              solutions that empower industries to achieve their goals. From raw material sourcing
              and product formulation to technical support and supply chain management, we provide
              end-to-end solutions tailored to meet the unique demands of our clients. Our expertise
              spans various sectors, ensuring that each product not only meets but exceeds industry
              standards. Whether it’s driving innovation, enhancing productivity, or promoting
              sustainability, we’re here to make a difference.
            </p>
          </div>
        </div>
      </div>

      <div class="pt-[140px] relative flex flex-row items-center justify-center gap-[30px]">
        <div class="w-[35%] flex flex-col items-end">
          <div class="relative">
            <div class="opacity-[30%] absolute top-[-55px] left-[-94px]">
              <QuoteMark />
            </div>

            <div class="w-[100%]">
              <h1 class="font-extrabold text-[48px] text-black leading-[64px]">
                Real Stories from Real Customers
              </h1>
              <p class="font-normal text-[18px] text-[#18191F] mt-[8px]">
                Get inspired by these stories.
              </p>
            </div>
          </div>

          <div
            class="relative w-[350px] rounded-[8px] shadow-[0_10px_20px_0_#29292A12] py-[60px] mt-[24px]"
          >
            <div class="opacity-[30%] w-[16px] h-[16px] absolute top-[115px] left-[30px]">
              <img src="../assets/quote.png" alt="" />
            </div>
            <img src="../assets//Testimonial_logos/CLI.png" alt="" class="ml-[64px]" />
            <h3 class="ml-[64px] mr-[32px] leading-[32px]">
              Thanks to Inteflex Global, our water purification processes have become more
              efficient. Their support team is always ready to help, and their solutions have truly
              made a difference for us.
            </h3>
            <div class="ml-[64px] mr-[32px] mt-[24px]">
              <h2 class="font-bold text-[18px] text-[#18191F]">Floyd Miles</h2>
              <p class="font-bold text-[18px] text-[#969BAB]">Vice President, CLI</p>
            </div>
          </div>
        </div>

        <div class="">
          <div
            class="relative w-[445px] h-[340px] rounded-[8px] shadow-[0_10px_20px_0_#29292A12] py-[30px]"
          >
            <div class="opacity-[30%] w-[16px] h-[16px] absolute top-[125px] left-[30px]">
              <img src="../assets/quote.png" alt="" />
            </div>

            <img src="../assets//Testimonial_logos/JPNL.png" alt="" class="ml-[64px]" />

            <h3 class="mt-[15px] ml-[64px] mr-[32px] leading-[32px]">
              The chemical solutions we’ve implemented from Inteflex Global have enhanced the
              quality and safety of our food products. Their focus on sustainability aligns
              perfectly with our values.
            </h3>
            <div class="ml-[64px] mr-[32px] mt-[24px]">
              <h2 class="font-bold text-[18px] text-[#18191F]">Jane Cooper</h2>
              <p class="font-bold text-[18px] text-[#969BAB]">CEO, JPNL</p>
            </div>
          </div>

          <div
            class="relative w-[350px] rounded-[8px] shadow-[0_10px_20px_0_#29292A12] py-[60px] mt-[32px]"
          >
            <div class="opacity-[30%] w-[16px] h-[16px] absolute top-[120px] left-[30px]">
              <img src="../assets/quote.png" alt="" />
            </div>
            <img src="../assets//Testimonial_logos/LOB.png" alt="" class="ml-[64px]" />
            <h3 class="ml-[64px] mr-[32px] leading-[32px]">
              Working with Inteflex Global has improved our crop yields and soil health
              significantly. Their expertise has been essential to our commitment to sustainable
              farming practices.
            </h3>
            <div class="ml-[64px] mr-[32px] mt-[24px]">
              <h2 class="font-bold text-[18px] text-[#18191F]">Kristin Watson</h2>
              <p class="font-bold text-[18px] text-[#969BAB]">Co-Founder, LeeveOn Branding</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-[60px] flex flex-row items-center justify-between">
        <div class="w-[40%]">
          <h1 class="font-extrabold text-[#18191F] text-[48px]">We serve millions Globally</h1>
          <p class="font-normal text-[18px] text-[#18191F]">
            Trusted by millions globally, including leading companies across various industries.
          </p>
        </div>

        <div class="w-[40%] flex flex-row flex-wrap items-center gap-[60px] gap-y-[5px]">
          <JPNL />
          <KoraneIcon />
          <NadineIcon />
          <LeeveOnIcon />
          <JrangIcon />
        </div>
      </div>

      <div class="pt-[60px]">
        <h1 class="font-extrabold text-[48px] text-[#18191F] mb-[40px]">Our Products</h1>
        <div class="flex flex-col items-center">
          <div class="flex flex-row items-center justify-between gap-[24px]">
            <div
              class="pt-[24px] px-[24px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
            >
              <img src="../assets/productPlacholder.png" alt="" />

              <div class="mt-[32px]">
                <p class="font-medium text-[14px] text-[#1A906B]">Food</p>

                <h1 class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]">
                  Calcium Carbonate Micronized
                </h1>

                <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
                  Essential for food production, used as a firming agent, acidity regulator, and
                  calcium source in various products.
                </p>
              </div>
            </div>

            <div
              class="pt-[24px] px-[24px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
            >
              <img src="../assets/productPlacholder.png" alt="" />

              <div class="mt-[32px]">
                <p class="font-medium text-[14px] text-[#1A906B]">Agro Chemicals:</p>

                <h1 class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]">
                  Agro Chemicals
                </h1>

                <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
                  A highly effective herbicide for controlling weeds, ensuring healthier crop growth
                  and improved yields.
                </p>
              </div>
            </div>

            <div
              class="pt-[24px] px-[24px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
            >
              <img src="../assets/productPlacholder.png" alt="" />

              <div class="mt-[32px]">
                <p class="font-medium text-[14px] text-[#1A906B]">Plastics</p>

                <h1 class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]">
                  Titanium Dioxide
                </h1>

                <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
                  A key ingredient in plastics, providing opacity, brightness, and durability for a
                  wide range of applications.
                </p>
              </div>
            </div>
          </div>

          <button
            class="p-[12px] border-[1px] border-black rounded-[8px] w-[160px] mt-[40px] flex items-center justify-center"
          >
            View more
          </button>
        </div>
      </div>

      <div class="mt-[80px] relative">
        <TriangleOne class="absolute left-[480px] top-0" />
        <TriangleTwo class="absolute bottom-[80px] left-0" />
        <TriangleThree class="absolute bottom-0 right-0" />
        <div class="flex flex-col items-center gap-[22px] pt-[80px]">
          <h1 class="text-[64px] text-[#2E2E2E] font-bold leading-[88px] text-center w-[80%]">
            We’re here to provide the chemical solutions that power your industry.
          </h1>

          <button
            class="rounded-[8px] px-[16px] py-[12px] bg-[#2E3192] text-white flex flex-row items-center gap-[11px]"
          >
            <WhatsappIcon />
            Get in touch with us
          </button>
        </div>
      </div>
    </main>

    <div
      class="w-[100%] bg-[#2E3192] mt-[54px] pb-[37px] flex flex-col items-center justify-center"
    >
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
  </main>
</template>
