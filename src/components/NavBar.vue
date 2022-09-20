<script setup>
import Logo from './Logo.vue';
</script>

<template>
  <div
    class="flex items-center px-4 border-b-[1px] text-lh-jungle-green border-lh-bg-gray h-[60px] font-[400] tablet:px-[72px]"
  >
    <div class="w-1/2">
      <Logo />
    </div>
    <div
      class="w-1/2 min-w-[385px] flex-row justify-around font-normal tablet:flex hidden text-sm"
    >
      <div>Cundinamarca</div>
      <div>Antioquia</div>
      <div>Recursos</div>
      <div class="centered-flex-row-box">
        <div>Mi Perfil</div>
        <img src="../assets/down-arrow.svg" class="w-3 h-2 ml-[10px]" />
        <img src="../assets/ellipse.svg" class="w-3 h-3 -mt-5 -ml-1" />
      </div>
    </div>
  </div>
</template>
