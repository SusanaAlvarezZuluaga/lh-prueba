<script setup>
const props = defineProps({
  marginTop: String,
  cityName: String,
  buildingName: String,
  address: String,
});
</script>

<template>
  <div :class="marginTop">
    <div class="font-[600] h-3">{{ cityName }}</div>
    <div class="mt-[21px] h-[10px]">{{ buildingName }}</div>
    <div class="mt-[14px] h-[10px]">{{ address }}</div>
  </div>
</template>
