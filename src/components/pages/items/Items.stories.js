import Items from './Items.vue';

export default {
  title: 'Portfolio/Pages/Items',
  component: Items,
  // argTypes: {
    // size: {
    //   control: { type: 'inline-radio' },
    //   options: ['small', 'medium', 'large']
    // },
    // variant: {
    //   control: { type: 'inline-radio' },
    //   options: ['default', 'light', 'dark']
    // },
  // }
};

const Template = (args) => ({
  components: { Items },
  setup() {
    return { args };
  },
  template: '<items v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // title: 'Default Button',
  // variant: 'default'
};

// export const Light = Template.bind({});
// Light.args = {
//   title: 'Light Button',
//   variant: 'light'
// }

// export const Dark = Template.bind({});
// Dark.args = {
//   title: 'Dark Button',
//   variant: 'dark'
// }

