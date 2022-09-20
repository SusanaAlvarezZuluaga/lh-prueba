<script setup>
import axios from 'axios';
import NavBar from '../components/NavBar.vue';
import CollectionCard from '../components/CollectionCard.vue';
import { onBeforeMount, ref } from 'vue';
import { LH_API_URL } from '../constants';
import CreateCollectionCard from '../components/CreateCollectionCard.vue';

const data = ref(null);
const dataLoaded = ref(false);

const getData = async () => {
  const response = await axios.get(LH_API_URL);
  let collections = response.data.data;
  const properties = response.data.included;

  const propertiesMap = new Map();
  properties.forEach((element) => {
    const imageUrl = element.attributes.gallery_urls[0].replace(
      'https://lh-sobreplanos-staging.imgix.net/',
      'https://lahaus.imgix.net/'
    );

    propertiesMap.set(parseInt(element.id), imageUrl);
  });

  collections = collections.map((collection, index) => {
    const images = collection.attributes.real_estate_ids.map((id) =>
      propertiesMap.get(id)
    );

    return {
      ...collection.attributes,
      images,
    };
  });
  data.value = collections;
  dataLoaded.value = true;
};
onBeforeMount(async () => {
  await getData();
});
</script>

<template>
  <div class="bg-white font-Silka mb-[87px]" v-if="dataLoaded">
    <NavBar />
    <div class="px-[24px]">
      <div
        class="text-[30px] text-center my-[60px] text-lh-jungle-green font-[600]"
      >
        Listas de favoritos
      </div>
      <div
        class="grid grid-cols-[repeat(auto-fill,300px)] gap-x-[33px] gap-y-[60px] justify-center"
      >
        <CollectionCard
          v-for="item in data"
          :title="item.name"
          :numProperties="item.real_estate_ids.length"
          :images="item.images"
          :key="item.id"
        />

        <CreateCollectionCard />
      </div>
    </div>
  </div>
</template>
