import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import ItemCard from './ItemCard.vue'

test('mount component', async () => {
  expect(ItemCard).toBeTruthy()

  const defaultItemCard = mount(ItemCard, {
    props: {
      item: {
        id: '2',
        attributes: {
          Name: 'Testing Item Card'
        }
      }    
    }
  })
  expect(defaultItemCard.html()).toMatchSnapshot()

})

test('Click on button emit "delete-item" with item id value', async() => {
  const wrapper = mount(ItemCard, {
    props: {
      item: {
        id: 1,
        attributes: {
          Name: 'Testing Item Card'
        }
      }    
    }
  })

  wrapper.find('button').trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.emitted('delete-item')[0]).toEqual([1])
})