import Items from './Items.vue';
import * as ItemCardStories from '@/components/molecules/item-card/ItemCard.stories'

export default {
  component: Items,
  title: 'Boilerplate/Pages/Items',
  argTypes: {
    deleteItem: {},
    fetchItems: {}
  },
  parameters: {
    actions: {
      handles: ['click button'],
    },
  },
};

const Template = (args) => ({
  components: { Items },
  setup() {
    return { args, ...ItemCardStories.actionsData };
  },
  template: '<items v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: []
};
