import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import components from './components'
import * as echarts from 'echarts'
import './icons/index.js'
import 'element-plus/dist/index.css'
import './styles/index.scss'

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$echarts = echarts
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(components)

app.mount('#app')
