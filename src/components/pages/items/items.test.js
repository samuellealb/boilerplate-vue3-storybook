import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import Items from './ItemsStatic.vue'

test('mount component', async () => {
  expect(Items).toBeTruthy()

  const defaultItems = mount(Items, {
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
  expect(defaultItems.html()).toMatchSnapshot()

  const noItem = mount(Items, {
    props: {
      items: []
    }
  })
  
  expect(noItem.html()).toMatchSnapshot()
})

test('Click on third button emit "delete-item" with item id value', async() => {
  const wrapper = mount(Items, {
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

  wrapper.find('.item-card:nth-child(3) button').trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.emitted('delete-item')[0]).toEqual([112])
})