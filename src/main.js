import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import { worker } from './mocks/browser'
import App from './App.vue'
import Home from '@/components/pages/home/Home.vue'
import Items from '@/components/pages/items/Items.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/items', component: Items },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

if (!import.meta.env.VITE_SERVER_MODE) {
  worker.start();
}

const app = createApp(App)
app.use(router)
app.mount('#root')