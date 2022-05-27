<template>
  <items-static :items="items" @delete-item="deleteItem" />
  <simple-button @click="fetchItems()" title="Get items" />
</template>

<script>
import { ref } from "vue";
import { getAxios } from '@/utils/get-axios.js'
import ItemsStatic from "./ItemsStatic.vue"
import SimpleButton from '@/components/atoms/simple-button/SimpleButton.vue'

export default {
  name: 'Items',
  components: {
    ItemsStatic,
    SimpleButton
  },
  setup() {
    const items = ref([]);
    const $axios = getAxios();
    const fetchItems = () => {
      $axios.get("/items").then((response) => {
        const data = Array.from(response.data);
        data.forEach((item) => {
          const itemIsLoaded = items.value.filter(it => it.id === item.id).length > 0
          if (itemIsLoaded) return
          items.value.push(item);
        });
      });
    };
    const deleteItem = (id) => {
      $axios.delete(`/item/${id}`).then((response) => {
        items.value.slice(0);
        items.value = [...response.data]
      });
    }

    return {
      items,
      fetchItems,
      deleteItem
    };
  }
}
</script>