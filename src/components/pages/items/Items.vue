<template>
  <default-layout>
    <div class="items">
      <h1>Items</h1>
      <button @click="fetchItems()">Get items</button>
      <div class="item" v-for="item in items" :key="item.id">
        <div>{{item.id}}</div>
        <div>{{item.name}}</div>
      </div>
    </div>
  </default-layout>
</template>

<script>
import './items.css'
import { ref } from "vue";
import { getAxios } from '@/utils/get-axios.js'
import DefaultLayout from "@/layouts/DefaultLayout.js"

export default {
  name: 'Items',
  components: {
    DefaultLayout
  },
  setup() {
    const items = ref([]);
    const $axios = getAxios();
    const fetchItems = () => {
      $axios.get("/items").then((response) => {
        const items = Array.from(response.data);
        items.forEach((item) => {
          items.value.push(item);
        });
      });
    };
    // fetchItems();

    return {
      items,
      fetchItems
    };
  }
}
</script>