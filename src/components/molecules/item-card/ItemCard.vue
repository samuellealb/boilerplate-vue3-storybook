<template>
  <div class="item-card">
    <div class="item-card__title">{{item.name}}</div>
    <div class="item-card__button">
      <simple-button size="small" title="Delete" @click="onDelete(item.id)" />
    </div>
  </div>
</template>

<script>
import SimpleButton from '@/components/atoms/simple-button/SimpleButton.vue'
import './item-card.css'

export default {
  name: 'ItemCard',
  components: {
    SimpleButton
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({'id': '', 'name': ''}),
      validator: item => ['id', 'name'].every(key => key in item),
    }
  },
  emits: ['delete-item'],
  setup(props, { emit }) {
    function onDelete (id) {
      emit('delete-item', id);
    }
    return { onDelete }
  },
}
</script>