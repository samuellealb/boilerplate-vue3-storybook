/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig(({mode}) => {
  require('dotenv').config({ path: `./.env.${mode}` });
  return {
    resolve:{
      alias:{
        '@' : path.resolve(__dirname, './src')
      },
    },
    plugins: [vue()],
    test: {
      globals: true,
      environment: "jsdom",
    }
  }
});
