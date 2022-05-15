<template>
  <component :is="layout">
    <router-view @defineLayout="updateLayout" />
  </component>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "App",
  setup () {
    const layout = ref("div");
    
    function updateLayout(val) {
      layout.value = val
    }

    return { layout, updateLayout }
  }
};
</script>

<style lang="postcss">
  @import '@/styles/main.css';
</style>
