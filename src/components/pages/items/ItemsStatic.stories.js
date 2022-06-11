import ItemsStatic from './ItemsStatic.vue';
import * as ItemCardStories from '@/components/molecules/item-card/ItemCard.stories'

export default {
  component: ItemsStatic,
  title: 'Portfolio/Pages/NoItems',
};

const Template = (args) => ({
  components: { ItemsStatic },
  setup() {
    return { args };
  },
  template: '<items-static v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: []
}