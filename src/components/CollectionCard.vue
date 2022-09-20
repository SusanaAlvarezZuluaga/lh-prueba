<script setup>
import { defineProps } from 'vue';
import CollectionCardImages from './CollectionCardImages.vue';

const props = defineProps({
  title: String,
  numProperties: Number,
  images: Array,
});
</script>

<template>
  <div class="flex flex-col items-center h-[269px]">
    <div class="w-[292px]">
      <CollectionCardImages :numProperties="numProperties" :images="images" />
      <div
        class="text-[18px] text-lh-jungle-green leading-[18px] font-[600] mt-[21px] truncate"
      >
        {{ title }}
      </div>
      <div
        class="text-[14px] text-lh-green-gray leading-[24px] font-[400] mt-3 h-[18px]"
      >
        {{
          numProperties == 1
            ? `${numProperties} propiedad guardada`
            : `${numProperties} propiedades guardadas`
        }}
      </div>
    </div>
  </div>
</template>
