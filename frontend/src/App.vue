<template>
  <div id="app">
    <h1
      class="aa-title"
      :class="{ 'aa-title--yellow': homeComp.titleColor === 'yellow' }"
    >
      {{ title }}
    </h1>
    <h2
      class="aa-subtitle"
      :class="{ 'aa-sub-title--purple': subTitle.color === 'purple' }"
    >
      {{ subTitle.text }}
    </h2>
    <button @click="changeColor">{{ homeComp.buttonMessage }}</button>

    <div class="aa-main-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/aa-test">Go to Test</router-link>
      <router-link to="/aa-jobs">Go to Jobs</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "App",
  setup() {
    const portfolioTitle = ref("Árvore Amarela");
    const homeComp = reactive({
      titleColor: "black",
      buttonMessage: "too sad =(",
    });
    const subTitle = ref({
      text: "um grande portfólio!",
      color: "black",
    });

    function changeColor() {
      homeComp.titleColor = "yellow";
      homeComp.buttonMessage = "now is better!";
      portfolioTitle.value = "Árvore Amarela <3";
      subTitle.value.text = "Agora mais bonito!";
      subTitle.value.color = "purple";

      setTimeout(() => {
        homeComp.titleColor = "black";
        homeComp.buttonMessage = "sad again...";
        (portfolioTitle.value = "Árvore Amarela"),
          (subTitle.value.text = "um grande portfólio!");
        subTitle.value.color = "black";
      }, 2000);
    }

    return {
      changeColor: changeColor,
      homeComp: homeComp,
      title: portfolioTitle,
      subTitle: subTitle,
    };
  },
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

#app .aa-title--yellow {
  color: yellow;
}

#app .aa-sub-title--purple {
  color: purple;
}

#app .red {
  color: red;
}
</style>
