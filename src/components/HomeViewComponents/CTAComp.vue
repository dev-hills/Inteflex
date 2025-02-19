<script>
import TriangleOne from '../icons/TriangleOne.vue'
import TriangleThree from '../icons/TriangleThree.vue'
import TriangleTwo from '../icons/TriangleTwo.vue'
import WhatsappIcon from '../icons/WhatsappIcon.vue'

export default {
  components: {
    TriangleOne,
    TriangleTwo,
    TriangleThree,
    WhatsappIcon,
  },
}
</script>

<template>
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
</template>
