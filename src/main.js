import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import { worker } from './mocks/browser'
import App from './App.vue'
// import Home from '@/components/pages/home/Home.vue'
import Users from '@/components/pages/users/Users.vue'

const routes = [
  { path: '/', component: Users },
  { path: '/users', component: Users },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

worker.start({
  onUnhandledRequest: 'bypass'
});

const app = createApp(App)
app.use(router)
app.mount('#root')