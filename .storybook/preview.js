import { initialize, mswDecorator } from 'msw-storybook-addon';
import { handlers } from '@/mocks/handlers'
import withAxiosDecorator from 'storybook-axios';
import { getAxios } from '@/utils/get-axios';
import '@/styles/main.css'

// init mocker server
initialize();

export const decorators = [mswDecorator, withAxiosDecorator(getAxios())];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: [...handlers]
  },
}