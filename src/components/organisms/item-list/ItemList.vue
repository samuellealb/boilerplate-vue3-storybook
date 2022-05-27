<template>
  <div class="item-list">
    <template v-if="hasItems">
      <item-card v-for="item in items" :item="item" :key="item.id" @delete-item="onDelete" />
    </template>
    <template v-else>
      <h2>No items loaded =/</h2>
    </template>
  </div>
</template>

<script>
import ItemCard from '@/components/molecules/item-card/ItemCard.vue'
import './item-list.css'
import { computed } from 'vue';

export default {
  name: 'ItemList',
  components: {
    ItemCard
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  emits: ['delete-item'],
  setup(props, { emit }) {
    function onDelete (id) {
      emit('delete-item', id);
    }
    const hasItems = computed(() => props.items.length > 0)
    return { onDelete, hasItems }
  },
}
</script>