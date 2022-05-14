<template>
  <div class="aa-main-menu">
    <router-link class="menu-item" to="/">Home</router-link>
    <router-link class="menu-item" to="/aa-test">Go to Test</router-link>
    <router-link class="menu-item" to="/aa-jobs">Go to Jobs</router-link>
  </div>
</template>

<style>
.menu-item {
  font-weight: bold;
  text-transform: uppercase;
  padding: .5rem;
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