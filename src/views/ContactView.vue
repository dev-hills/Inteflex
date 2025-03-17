<script setup>
import { ref } from 'vue';
import FBPurple from '@/components/icons/FBPurple.vue';
import IGPurple from '@/components/icons/IGPurple.vue';
import TwitterPurple from '@/components/icons/TwitterPurple.vue';
import LocationMarker from '@/components/icons/LocationMarker.vue';
import MailIcon from '@/components/icons/MailIcon.vue';
import TelephoneIcon from '@/components/icons/TelephoneIcon.vue';
import CTAComp from '@/components/HomeViewComponents/CTAComp.vue';
import FooterComp from '@/components/HomeViewComponents/FooterComp.vue';
import { GoogleMap, Marker } from 'vue3-google-map';

const center = { lat: 6.519416, lng: 3.334692 };

const fullName = ref('');
const email = ref('');
const message = ref('');
const isLoading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const sendEmail = async () => {
  if (!fullName.value || !email.value || !message.value) {
    errorMessage.value = 'All fields are required!';
    return;
  }
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await fetch('http://127.0.0.1:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: fullName.value,
        email: email.value,
        message: message.value
      })
    });

    const data = await response.json();
    if (response.ok) {
      successMessage.value = 'Email sent successfully!';
      fullName.value = '';
      email.value = '';
      message.value = '';
    } else {
      errorMessage.value = data.message || 'Failed to send email';
    }
  } catch (error) {
    errorMessage.value = 'Error sending email. Please try again later.';
  }
  isLoading.value = false;
};
</script>

<template>
  <main class="pt-[200px] sm:pt-[120px]">
    <div class="py-[70px] px-[65px] sm:px-[15px] w-[950px] mx-auto shadow-[0_20px_26px_12px_#10182814] sm:w-[100%]">
      <h1 class="font-bold text-[24px] text-[#ED008C] border-[2.3px] border-[#ED008C] border-x-0 border-t-0 pb-[7px] w-fit text-center mx-auto">
        Get In Touch
      </h1>

      <h1 class="mb-[27px] mt-[57px] font-medium text-[20px] text-[#0F001A]">Leave us a message</h1>

      <div class="mt-[27px] flex flex-row sm:flex-col items-center justify-between gap-[50px]">
        <div class="w-[50%] sm:w-[100%]">
          <input v-model="fullName" type="text" class="border-[1.2px] border-[#B4BEC8] w-[100%] rounded-[4px] p-[15px] outline-none" placeholder="Full Name" />

          <input v-model="email" type="email" class="border-[1.2px] border-[#B4BEC8] w-[100%] rounded-[4px] p-[15px] outline-none mt-[27px]" placeholder="Email Address" />

          <textarea v-model="message" rows="5" class="border-[1.2px] border-[#B4BEC8] w-[100%] rounded-[4px] p-[15px] outline-none resize-none mt-[27px]" placeholder="Your Message"></textarea>

          <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
          <p v-if="successMessage" class="text-green-500 mt-2">{{ successMessage }}</p>

          <button @click="sendEmail" :disabled="isLoading" class="w-[100%] bg-[#2E3192] p-[12px] rounded-[8px] text-white text-[14px] mt-[70px]">
            {{ isLoading ? 'Sending...' : 'Send' }}
          </button>
        </div>

        <div class="w-[50%] sm:w-[100%] flex flex-col items-start">
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

          <div class="mt-[43px] w-[100%] h-[180px]">
            <GoogleMap
              api-key="AIzaSyCl1XVrwoqrskD6SJueyIBb63NlBskExl0"
              style="width: 100%; height: 180px"
              :center="center"
              :zoom="15"
            >
              <Marker :options="{ position: center }" />
            </GoogleMap>
            <!-- <img src="@/assets/MapPlaceholder.png" alt="" /> -->
          </div>
        </div>
      </div>
    </div>

    <div class="px-[112px] sm:px-[20px] mt-[172px] mb-[107px]">
      <CTAComp />
    </div>

    <FooterComp />
  </main>
</template>
