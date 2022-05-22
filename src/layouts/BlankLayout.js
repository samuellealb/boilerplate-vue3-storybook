import { markRaw } from "vue";
import BlankTemplate from "@/components/templates/Blank.vue"

export default {
  name: 'BlankLayout',
  emits: ['define-layout'],
  setup(props, context) {
    context.emit('define-layout', markRaw(BlankTemplate));
    return () => context.slots.default()
  }
}