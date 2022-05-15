import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import CardLabel from './CardLabel.vue'

test('mount component', async () => {
  expect(CardLabel).toBeTruthy()

  const wrapper = mount(CardLabel, {
    props: {
      title: 'Test Button',
      light: false,
      size: 'medium'
    }
  })

  expect(wrapper.html()).toMatchSnapshot()
})