import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import { worker } from './mocks/browser'
import App from './App.vue'
import Home from '@/components/pages/home/Home.vue'
import Users from '@/components/pages/users/Users.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
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