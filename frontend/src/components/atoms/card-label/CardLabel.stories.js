import CardLabel from './CardLabel.vue';

export default {
  title: 'Portfolio/Card Label',
  component: CardLabel,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
  }
};

const Template = (args) => ({
  components: { CardLabel },
  setup() {
    return { args };
  },
  template: '<card-label v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Default Label',
  light: false,
  size: 'medium'
};

export const Light = Template.bind({});
Light.args = {
  title: 'Light Label',
  light: true,
  size: 'medium'
}

