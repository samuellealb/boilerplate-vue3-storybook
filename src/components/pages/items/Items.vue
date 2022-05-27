<template>
  <items-static :items="items" />
</template>

<script>
import { ref } from "vue";
import { getAxios } from '@/utils/get-axios.js'
import ItemsStatic from "./ItemsStatic.vue";

export default {
  name: 'Items',
  components: {
    ItemsStatic
  },
  setup() {
    const items = ref([]);
    const $axios = getAxios();
    const fetchItems = () => {
      $axios.get("/items").then((response) => {
        const data = Array.from(response.data);
        data.forEach((item) => {
          items.value.push(item);
        });
      });
    };
    fetchItems();

    return {
      items,
      fetchItems
    };
  }
}
</script>