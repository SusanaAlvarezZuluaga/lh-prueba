<script setup>
import CityInfo from './CityInfo.vue';
</script>

<template>
  <div
    class="w-full bg-lh-caribbean-green px-6 text-sm font-[400] text-lh-jungle-green"
  >
    <img
      class="pt-[48.84px] w-[144px] h-[27.73]"
      src="https://lahaus.imgix.net/static/branding/logo-lahaus-icon-white.svg?auto=compress,format&dpr=2"
    />
    <CityInfo
      marginTop="mt-[52.43px]"
      cityName="Bogotá"
      buildingName="Edificio WeWork, piso 3"
      address="Calle 93 #19-55"
    />

    <CityInfo
      marginTop="mt-[45px]"
      cityName="Medellín"
      buildingName="35 Palms Business Tower, piso 4"
      address="Carrera 35 # 15b-143"
    />

    <div class="mt-[75px] flex items-center h-[24.97px]">
      <i class="fab fa-whatsapp w-[24.65px] h-[24.64px] mr-[24.35px]"></i>
      <i class="fab fa-twitter w-[24.65px] h-[20.02px] mr-6"></i>
      <i
        class="fa-brands fa-facebook-f w-[12.12px] h-[23.51px] mr-[24.23px]"
      ></i>
      <i class="fab fa-instagram w-[24.64px] h-[24.64px]"></i>
    </div>
    <div class="mt-[34.03px] pb-[72px]">
      © 2020 La Haus • comunidad@lahaus.com • Términos • Privacidad • Mapa del
      sitio
    </div>
  </div>
</template>
