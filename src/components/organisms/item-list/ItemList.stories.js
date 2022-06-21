import ItemList from './ItemList.vue'
import * as ItemCardStories from '@/components/molecules/item-card/ItemCard.stories'

export default {
  component: 'ItemList',
  title: 'Boilerplate/Organisms/ItemList',
  decorators: [() => ({ template: '<div style="padding: 3em; background-color:white;"><story/></div>' })],
  argTypes: { onDelete: {} },
  parameters: {
    actions: {
      handles: ['click button'],
    },
  },
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
    { ...ItemCardStories.Default.args.item, id: '1', attributes: { Name: 'Lorem Ipsum' }},
    { ...ItemCardStories.Default.args.item, id: '2', attributes: { Name: 'Dolor Sit' }},
    { ...ItemCardStories.Default.args.item, id: '3', attributes: { Name: 'Consectetur' }},
  ]
}

export const NoItems = Template.bind({});
NoItems.args = {
  items: []
}

