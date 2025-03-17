<script setup></script>

<template>
  <div class="pt-[60px]">
    <h1 class="font-extrabold text-[48px] text-[#18191F] mb-[40px]">Our Products</h1>
    <div class="flex flex-col items-center">
      <div class="flex flex-row sm:flex-col items-center justify-between gap-[24px]">
        <div
          class="pt-[24px] px-[24px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
        >
          <img src="../../../public/productImage9.JPG" alt="" />

          <div class="mt-[32px]">
            <p class="font-medium text-[14px] text-[#1A906B]">Food</p>

            <h1 class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]">
              Calcium Carbonate Micronized
            </h1>

            <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
              Essential for food production, used as a firming agent, acidity regulator, and calcium
              source in various products.
            </p>
          </div>
        </div>

        <div
          class="pt-[24px] px-[24px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
        >
          <img src="../../../public/productImage17.JPG" alt="" />

          <div class="mt-[32px]">
            <p class="font-medium text-[14px] text-[#1A906B]">Agro Chemicals:</p>

            <h1 class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]">
              Agro Chemicals
            </h1>

            <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
              A highly effective herbicide for controlling weeds, ensuring healthier crop growth and
              improved yields.
            </p>
          </div>
        </div>

        <div
          class="pt-[24px] px-[24px] pb-[32px] rounded-[8px] w-[384px] h-0[500px] shadow-[0_10px_16px_-2px_#10182814]"
        >
          <img src="../../../public/productImage18.JPG" alt="" />

          <div class="mt-[32px]">
            <p class="font-medium text-[14px] text-[#1A906B]">Plastics</p>

            <h1 class="font-medium text-[24px] text-[#101828] leading-[32px] w-[70%] mt-[12px]">
              Titanium Dioxide
            </h1>

            <p class="font-medium text-[16px] text-[#667085] leading-[24px] mt-[12px]">
              A key ingredient in plastics, providing opacity, brightness, and durability for a wide
              range of applications.
            </p>
          </div>
        </div>
      </div>

      <button
        @click="$router.push(`/products`)"
        class="p-[12px] border-[1px] border-black rounded-[8px] w-[160px] mt-[40px] flex items-center justify-center cursor-pointer"
      >
        View more
      </button>
    </div>
  </div>
</template>
