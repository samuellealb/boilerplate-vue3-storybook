<template>
  <items-static :items="items" @delete-item="deleteItem" />
  <simple-button class="fetch-button" @click="fetchItems" title="Get items" />
</template>

<script>
import { ref } from "vue";
import { getAxios } from '@/utils/get-axios.js'
import ItemsStatic from "./ItemsStatic.vue"
import SimpleButton from '@/components/atoms/simple-button/SimpleButton.vue'

export default {
  name: 'Items',
    props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  components: {
    ItemsStatic,
    SimpleButton
  },
  setup() {
    let items = ref([]);
    const $axios = getAxios();
    const fetchItems = async () => {
      const { data } = await $axios.get("/items")
     items.value = data
    };
    const deleteItem = async (id) => {
      const { data } = await $axios.delete(`/item/${id}`)
      items.value = data
    }

    return {
      items,
      fetchItems,
      deleteItem
    };
  }
}
</script>