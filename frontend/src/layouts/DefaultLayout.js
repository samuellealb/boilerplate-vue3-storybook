import { markRaw } from "vue";
import DefaultTemplate from "../components/templates/Default.vue"

export default {
  name: 'BaseLayout',
  emits: ['define-layout'],
  setup(props, context) {
    context.emit('define-layout', markRaw(DefaultTemplate));
    return () => context.slots.default()
  }
}