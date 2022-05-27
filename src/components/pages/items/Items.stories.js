import Items from './Items.vue';

export default {
  component: Items,
  title: 'Portfolio/Pages/Items/ServerData',
};

const Template = (args) => ({
  components: { Items },
  setup() {
    return { args };
  },
  template: '<items v-bind="args" />',
});

export const Default = Template.bind({});
