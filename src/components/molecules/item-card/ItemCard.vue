<template>
  <div class="item-card">
    <div class="item-card__title">{{item.attributes.Name}}</div>
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
      default: () => ({id: '', attributes: {Name: ''}}),
      validator: item => ['id', 'attributes'].every(key => key in item),
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