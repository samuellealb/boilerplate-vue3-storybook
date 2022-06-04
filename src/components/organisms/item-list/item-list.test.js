import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import ItemList from './ItemList.vue'

test('mount component', async () => {
  expect(ItemList).toBeTruthy()

  const defaultItemList = mount(ItemList, {
    props: {
      items: [
        {
          id: '1',
          name: 'Testing Item List 1'
        },
        {
          id: '2',
          name: 'Testing Item List 2'
        },
        {
          id: '3',
          name: 'Testing Item List 3'
        },
      ]
    }
  })
  expect(defaultItemList.html()).toMatchSnapshot()

  const noItemList = mount(ItemList, {
    props: {
      items: []
    }
  })
  expect(noItemList.html()).toMatchSnapshot()
})

test('Click on second button emit "delete-item" with item id value', async() => {
  const wrapper = mount(ItemList, {
    props: {
      items: [
        {
          id: 55,
          name: 'Testing Item List 1'
        },
        {
          id: 235,
          name: 'Testing Item List 2'
        },
        {
          id: 112,
          name: 'Testing Item List 3'
        },
      ]   
    }
  })

  wrapper.find('.item-card:nth-child(2) button').trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.emitted('delete-item')[0]).toEqual([235])
})