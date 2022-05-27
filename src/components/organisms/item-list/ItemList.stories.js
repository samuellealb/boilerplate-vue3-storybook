import ItemList from './ItemList.vue'
import * as ItemCardStories from '@/components/molecules/item-card/ItemCard.stories'

export default {
  component: 'ItemList',
  title: 'Portfolio/Organisms/ItemList',
  decorators: [() => ({ template: '<div style="padding: 3em; background-color:white;"><story/></div>' })],
  argTypes: { onDelete: {} }
}

const Template = args => ({
  components: { ItemList },
  setup() {
    return { args, ...ItemCardStories.actionsData }
  },
  template: '<ItemList v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { ...ItemCardStories.Default.args.item, id: '1', name: 'Lorem Ipsum' },
    { ...ItemCardStories.Default.args.item, id: '2', name: 'Dolor Sit' },
    { ...ItemCardStories.Default.args.item, id: '3', name: 'Consectetur' },
  ]
}

export const NoItems = Template.bind({});
NoItems.args = {
  items: []
}

