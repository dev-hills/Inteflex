<script setup>
import FBPurple from '@/components/icons/FBPurple.vue'
import IGPurple from '@/components/icons/IGPurple.vue'
import TwitterPurple from '@/components/icons/TwitterPurple.vue'
import LocationMarker from '@/components/icons/LocationMarker.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import TelephoneIcon from '@/components/icons/TelephoneIcon.vue'
import CTAComp from '@/components/HomeViewComponents/CTAComp.vue'
import FooterComp from '@/components/HomeViewComponents/FooterComp.vue'
</script>

<template>
  <main class="pt-[200px]">
    <div class="py-[70px] px-[65px] w-[950px] mx-auto shadow-[0_20px_26px_12px_#10182814]">
      <h1
        class="font-bold text-[24px] text-[#ED008C] border-[2.3px] border-[#ED008C] border-x-0 border-t-0 pb-[7px] w-fit text-center mx-auto"
      >
        Get In Touch
      </h1>

      <h1 class="mb-[27px] mt-[57px] font-medium text-[20px] text-[#0F001A]">Leave us a message</h1>

      <div class="mt-[27px] flex flex-row items-center justify-between gap-[50px]">
        <div class="w-[50%]">
          <input
            type="text"
            class="border-[1.2px] border-[#B4BEC8] w-[100%] rounded-[4px] p-[15px] outline-none"
            placeholder="Full Name"
          />

          <input
            type="email"
            class="border-[1.2px] border-[#B4BEC8] w-[100%] rounded-[4px] p-[15px] outline-none mt-[27px]"
            placeholder="Email Address"
          />

          <textarea
            rows="5"
            class="border-[1.2px] border-[#B4BEC8] w-[100%] rounded-[4px] p-[15px] outline-none resize-none mt-[27px]"
            placeholder="Your Message"
          />

          <button
            class="w-[100%] bg-[#2E3192] p-[12px] rounded-[8px] text-white text-[14px] mt-[70px]"
          >
            Send
          </button>
        </div>

        <div class="w-[50%] flex flex-col items-start">
          <div class="flex flex-row items-start gap-[20px]">
            <LocationMarker />

            <span class="text-[#0F001A] font-normal text-[16px] leading-[24px]"
              >196, Apapa/Oshodi Expressway, Opp. Ibalex Ceramics Company, Ilasa Bus Stop Ilasamaja,
              Lagos.</span
            >
          </div>

          <div class="flex flex-row items-start gap-[20px] mt-[16px]">
            <TelephoneIcon />

            <div class="flex flex-col">
              <span class="text-[#0F001A] font-normal text-[16px] leading-[24px]"
                >+234 81-6241-6550</span
              >
              <span class="text-[#0F001A] font-normal text-[16px] leading-[24px]"
                >+234 80-2253-9367</span
              >
            </div>
          </div>

          <div class="flex flex-row items-center gap-[20px] mt-[16px]">
            <MailIcon />
            <span class="text-[#0F001A] font-normal text-[16px] leading-[24px]"
              >info@inteflexglobal.com</span
            >
          </div>

          <div class="mt-[16px] flex flex-row items-center gap-[26px]">
            <FBPurple />
            <TwitterPurple />
            <IGPurple />
          </div>

          <div class="mt-[43px]">
            <img src="@/assets/MapPlaceholder.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="px-[112px] mt-[172px] mb-[107px]">
      <CTAComp />
    </div>

    <FooterComp />
  </main>
</template>
