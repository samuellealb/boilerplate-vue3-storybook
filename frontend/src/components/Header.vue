<template>
  <div class="header">
    <h1
      v-if="isMounted"
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
    <br>
    <div class="footnote">
      <slot name="footnote-area">
        {{footNote}}
      </slot>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Title Here'
    }
  },
    setup(props, context) {

    const obs = context.attrs.nonPropAttrKey

    const homeComp = reactive({
      titleColor: "black",
      buttonMessage: "too sad =(",
    });
    const subTitle = ref({
      text: "um grande portfólio!",
      color: "black",
    });

    const currentTitle = ref(props.title);

    function changeColor() {
      homeComp.titleColor = "yellow";
      homeComp.buttonMessage = "now is better!";
      currentTitle.value = "Árvore Amarela <3";
      subTitle.value.text = "Agora mais bonito!";
      subTitle.value.color = "purple";

      setTimeout(() => {
        homeComp.titleColor = "black";
        homeComp.buttonMessage = "sad again...";
        (currentTitle.value = "Árvore Amarela"),
          (subTitle.value.text = "um grande portfólio!");
        subTitle.value.color = "black";
      }, 2000);
    }

    let isMounted = ref(false);
    onMounted(function() {
      isMounted.value = true
    })

    return {
      changeColor: changeColor,
      homeComp: homeComp,
      title: currentTitle,
      subTitle: subTitle,
      footNote: obs,
      isMounted: isMounted
    };
  },
}

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

.aa-title--yellow {
  color: yellow;
}

.aa-sub-title--purple {
  color: purple;
}

.red {
  color: red;
}

.footnote {
  font-style: italic;
  padding: 1rem 0;
}
</style>