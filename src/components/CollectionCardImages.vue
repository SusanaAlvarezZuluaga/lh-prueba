<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  numProperties: Number,
  images: Array,
});
</script>

<template>
  <div
    :class="`h-[196px] flex ${
      numProperties > 0 ? 'bg-lh-jungle-green rounded-[10px]' : ''
    } text-white font-[600] text-[18px]`"
  >
    <img
      v-if="numProperties == 0"
      src="../assets/images/no-image.png"
      class="rounded-[10px] w-[300px] h-full object-cover`"
    />
    <img
      v-if="numProperties >= 1"
      :src="images[0]"
      :class="`rounded-[10px]  ${
        numProperties == 1 ? 'w-full' : 'w-[150px]'
      } z-30 border-[1px] border-white object-cover`"
    />
    <img
      v-if="numProperties >= 2"
      :src="images[1]"
      :class="`rounded-[10px] ${
        numProperties > 2 ? 'w-[115px] ml-[-34px]' : 'w-[218px]  ml-[-76px]'
      } z-20 border-[1px] border-white object-cover`"
    />
    <img
      v-if="numProperties >= 3"
      :src="images[2]"
      class="rounded-[10px] w-[122.6px] ml-[-61.6px] z-10 object-cover opacity-30"
    />
    <div
      v-if="numProperties >= 3"
      class="rounded-[10px] centered-flex-row-box ml-[-61px] w-[61px] z-10"
    >
      +{{ numProperties - 2 }}
    </div>
  </div>
</template>
