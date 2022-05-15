/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({mode}) => {
  require('dotenv').config({ path: `./.env.${mode}` });
  return {
    plugins: [vue()],
    test: {
      globals: true,
      environment: "jsdom",
    }
  }
});
