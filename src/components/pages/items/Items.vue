<template>
  <default-layout>
    <div class="items">
      <h1>Items</h1>
      <item-list :items="items" @delete-item="deleteItem"/>
    </div>
    </default-layout>
</template>

<script setup>
import './items.css'
import DefaultLayout from "@/layouts/DefaultLayout.js"
import ItemList from '@/components/organisms/item-list/ItemList.vue'
import { ref, onMounted } from 'vue'
import { getAxios } from '@/utils/get-axios.js'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  }
})
let items = ref(props.items)
const $axios = getAxios()
const fetchItems = async () => {
  const { data } = await $axios.get("/items")
  items.value = data
}
const deleteItem = async (id) => {
  const { data } = await $axios.delete(`/item/${+id}`)
  items.value = data
}
onMounted(() => {
  fetchItems()
})

</script>
