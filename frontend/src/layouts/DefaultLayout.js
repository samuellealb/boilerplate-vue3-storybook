import { markRaw } from "vue";
import BaseMarkup from "./markups/BaseMarkup.vue"

export default {
  name: 'BaseLayout',
  emits: ['define-layout'],
  setup(props, context) {
    context.emit('define-layout', markRaw(BaseMarkup));
    return () => context.slots.default()
  }
}