<template>
  <div :class="classes">
    {{ title }}
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import './simple-button.css';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'light', 'dark'].indexOf(value) !== -1;
      },
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
      'simple-button': true,
      [`simple-button--${props.variant || 'default'}`]: true, 
      [`simple-button--${props.size || 'medium'}`]: true,      
    }));
    return { classes }
  },
}
</script>
