<template>
  <default-layout>
    <div class="items">
      <h1>Items</h1>
      <item-list :items="items" />
    </div>
  </default-layout>
</template>

<script>
import './items.css'
import ItemList from '@/components/organisms/item-list/ItemList.vue';
import DefaultLayout from "@/layouts/DefaultLayout.js"

export default {
  name: 'ItemsStatic',
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    ItemList,
    DefaultLayout
  },
}
</script>