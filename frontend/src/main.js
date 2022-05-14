import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import Jobs from './components/pages/Jobs.vue'
import Test from './components/pages/Test.vue'

console.log(import.meta.env)

const routes = [
  { path: '/aa-test', component: Test },
  { path: '/aa-jobs', component: Jobs },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const app = createApp(App)
app.use(router)
app.provide('$axios', axiosInstance)
app.mount('#root')

