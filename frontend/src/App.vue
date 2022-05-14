<template>
  <div id="app">
    <Header :title="portfolioTitle" nonPropAttrKey="Not defined property attribute value">
      <template v-slot:footnote-area>
        Footnote message
      </template>
    </Header>
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'

export default {
  name: "App",
  components: {
    Header,
    Menu
  },
  setup () {
    const portfolioTitle = ref("Árvore Amarela");
    
    return { portfolioTitle }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: darkgray;
}
</style>
