<template>
  <nav class="menu">
    <router-link class="menu-item" to="/">Home</router-link>
    <router-link class="menu-item" to="/projects">Go to Jobs</router-link>
  </nav>
</template>

<script>
import './menu.css';

export default {
  name: "Menu",
};
</script>
