<template>
  <blank-layout>
    <div class="home">
      <div class="logo">
        <img src="@/assets/imgs/vue-logo.svg" />
      </div>
      <div class="logo">
        <img src="@/assets/imgs/storybook-logo.svg" />
      </div>
    </div>
  </blank-layout>
</template>

<script>
import './home.css'
import BlankLayout from '@/layouts/BlankLayout'

export default {
  components: {
    BlankLayout
  },
  setup() {
    
  },
}
</script>