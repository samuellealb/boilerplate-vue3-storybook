<template>
  <div :class="classes">
    {{ title }}
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import './card-label.css';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    light: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = reactive(props)
    const classes = computed(() => ({
      'card-label': true,
      'card-label--light': props.light,
      [`card-label--${props.size || 'medium'}`]: true,      
    }));
    return { classes }
  },
}
</script>
