import Users from './Users.vue';
import withAxiosDecorator from 'storybook-axios';
import { getAxios } from '@/utils/get-axios';
import { rest } from 'msw'
import { users } from '@/mocks/data'

export default {
  title: 'Portfolio/Users',
  component: Users,
  // argTypes: {
    // size: {
    //   control: { type: 'inline-radio' },
    //   options: ['small', 'medium', 'large']
    // },
    // variant: {
    //   control: { type: 'inline-radio' },
    //   options: ['default', 'light', 'dark']
    // },
  // }
};

const Template = (args) => ({
  components: { Users },
  setup() {
    return { args };
  },
  template: '<users v-bind="args" />',
  decorators: [withAxiosDecorator(getAxios())],
});

export const Default = Template.bind({});
Default.args = {
  // title: 'Default Button',
  // variant: 'default'
};
Default.parameters = {
  msw: {
    handlers: [
      rest.get(`/users`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(users)
        )
      })
    ]
  },
}

// export const Light = Template.bind({});
// Light.args = {
//   title: 'Light Button',
//   variant: 'light'
// }

// export const Dark = Template.bind({});
// Dark.args = {
//   title: 'Dark Button',
//   variant: 'dark'
// }

