import { initialize, mswDecorator } from 'msw-storybook-addon';
import { handlers } from '@/mocks/handlers'
import withAxiosDecorator from 'storybook-axios';
import { getAxios } from '@/utils/get-axios';
import '@/styles/main.css'

// init mocker server
const activeDecorators = [withAxiosDecorator(getAxios())]
if (!import.meta.env.VITE_SERVER_MODE) {
  initialize();
  activeDecorators.push(mswDecorator);
}

export const decorators = [...activeDecorators];

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