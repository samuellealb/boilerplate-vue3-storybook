import ItemsStatic from './ItemsStatic.vue';
import * as ItemCardStories from '@/components/molecules/item-card/ItemCard.stories'

export default {
  component: ItemsStatic,
  title: 'Portfolio/Pages/ItemsStatic',
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
  items: [
    { ...ItemCardStories.Default.args.item, id: '1', name: 'Sed do Eiusmod' },
    { ...ItemCardStories.Default.args.item, id: '2', name: 'Tempor Incididunt' },
    { ...ItemCardStories.Default.args.item, id: '3', name: 'Magna Aliqua' },
  ]
}