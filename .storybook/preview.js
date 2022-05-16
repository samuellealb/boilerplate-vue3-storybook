import { initialize, mswDecorator } from 'msw-storybook-addon';
import '@/styles/main.css'

initialize({
  onUnhandledRequest: 'bypass'
});

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}