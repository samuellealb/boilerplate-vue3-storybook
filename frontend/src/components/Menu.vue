<template>
  <nav class="menu">
    <router-link class="menu-item" to="/">Home</router-link>
    <router-link class="menu-item" to="/aa-test">Go to Test</router-link>
    <router-link class="menu-item" to="/projects">Go to Jobs</router-link>
  </nav>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
.menu-item {
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
  text-decoration: none;
  color: black;
}
.menu-item:visited {
  text-decoration: none;
}
.menu-item.router-link-active {
  text-decoration: underline;
}
</style>
