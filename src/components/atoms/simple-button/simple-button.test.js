import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import SimpleButton from './SimpleButton.vue'

test('mount component', async () => {
  expect(SimpleButton).toBeTruthy()

  const defaultButton = mount(SimpleButton, {
    props: {
      title: 'Default Button',
      variant: 'default',
      size: 'medium'
    }
  })
  expect(defaultButton.html()).toMatchSnapshot()

  const lightButton = mount(SimpleButton, {
    props: {
      title: 'Light Button',
      variant: 'light',
      size: 'medium'
    }
  })
  expect(lightButton.html()).toMatchSnapshot()

  const darkButton = mount(SimpleButton, {
    props: {
      title: 'Dark Button',
      variant: 'dark',
      size: 'medium'
    }
  })
  expect(darkButton.html()).toMatchSnapshot()

  const smallButton = mount(SimpleButton, {
    props: {
      title: 'Small Button',
      variant: 'default',
      size: 'small'
    }
  })
  expect(smallButton.html()).toMatchSnapshot()

  const largeButton = mount(SimpleButton, {
    props: {
      title: 'Large Button',
      variant: 'default',
      size: 'large'
    }
  })
  expect(largeButton.html()).toMatchSnapshot()

})