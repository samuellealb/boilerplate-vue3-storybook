import ItemCard from './ItemCard.vue';
import { action } from '@storybook/addon-actions';

export default {
  component: ItemCard,
  excludeStories: /.*Data$/,
  title: 'Portfolio/Molecules/ItemCard',
  argTypes: {
    onDelete: {}
  }
};

export const actionsData = {
  onDelete: action('delete-item')
}

const Template = args => ({
  components: { ItemCard },
  setup () {
    return { args, ...actionsData };
  },
  template: '<ItemCard v-bind="args" />'
});
export const Default = Template.bind({});
Default.args = {
  item: {
    id: '1',
    name: 'Lorem Ipsum Dolor'
  }
}