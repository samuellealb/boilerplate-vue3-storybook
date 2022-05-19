import Users from './Users.vue';

export default {
  title: 'Portfolio/Users',
  component: Users,
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
  components: { Users },
  setup() {
    return { args };
  },
  template: '<users v-bind="args" />',
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

