<script setup>
import LhNavBar from '../components/LhNavBar.vue';
import LhFooter from '../components/LhFooter.vue';
</script>

<template>
  <div class="bg-white font-Silka">
    <LhNavBar />
    <slot></slot>
    <LhFooter />
  </div>
</template>
