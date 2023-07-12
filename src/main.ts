// import './sass/assets/main.sass'
import './assets/sass/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
