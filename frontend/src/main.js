import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Test from './components/Test.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/aa-test', component: Test },
  { path: '/projects', component: Projects },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const app = createApp(App)
app.use(router)
app.provide('$axios', axiosInstance)
app.mount('#root')

