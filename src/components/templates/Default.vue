<template>
  <div class="base">
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
import Logo from "@/components/atoms/logo/Logo.vue";
import Menu from "@/components/molecules/menu/Menu.vue";

export default {
  name: "DefaultTemplate",
  components: {
    Logo,
    Menu,
  },
};
</script>
