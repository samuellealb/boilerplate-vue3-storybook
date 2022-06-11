import { mount } from '@vue/test-utils'
import { getAxios } from '@/utils/get-axios.js'
import { vi, test, expect, describe } from 'vitest'
import ItemsStatic from './ItemsStatic.vue'
import ItemsPage from './Items.vue'
import { items } from '@/mocks/data'
const axios = getAxios()

describe('mount component', () => {
    
  test('renders empty list', () => {
    expect(ItemsStatic).toBeTruthy()
    const noItem = mount(ItemsStatic, { props: { items: [] } })
    expect(noItem.find('.item-list').findAll('h2').length).toEqual(1)
    expect(noItem.html()).toMatchSnapshot()
  })
  
  test('renders list with three items', () => {
    expect(ItemsStatic).toBeTruthy()
    const threeItems = mount(ItemsStatic, { props: { items } })
    expect(threeItems.find('.item-list').findAll('.item-card').length).toEqual(3)
    expect(threeItems.html()).toMatchSnapshot()
  })
  
})

describe("API Calls", () => {

  describe("fetchItems being called successufuly", () => {
    test("should return items list", async () => {    
      vi.spyOn(axios, 'get').mockResolvedValue(items)
      mount(ItemsPage, { props: { items: [] } })
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('/items')
    });
  });

  describe("deleteItem being called successufuly", () => {
    test("should return deleted item id", async () => {    
      vi.spyOn(axios, 'delete')
      const wrapper = mount(ItemsPage, { props: { items } })
      wrapper.find('.item-card:nth-of-type(2) button').trigger('click')
      expect(axios.delete).toHaveBeenCalledTimes(1)
      expect(axios.delete).toHaveBeenCalledWith('/item/2')
    });
  });

});
