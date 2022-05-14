<template>
  <div>
    <header>
      <Logo />
      <Menu />
    </header>
    <main>
      <slot />
    </main>
    <footer>Footer message</footer>
  </div>
</template>

<script>
import Logo from "../../components/Logo.vue";
import Menu from "../../components/Menu.vue";

export default {
  name: "BaseMarkup",
  components: {
    Logo,
    Menu,
  },
};
</script>
