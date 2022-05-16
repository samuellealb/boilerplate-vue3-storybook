import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import SimpleButton from './SimpleButton.vue'

test('mount component', async () => {
  expect(SimpleButton).toBeTruthy()

  const wrapper = mount(SimpleButton, {
    props: {
      title: 'Test Button',
      variant: 'default',
      size: 'medium'
    }
  })

  expect(wrapper.html()).toMatchSnapshot()
})