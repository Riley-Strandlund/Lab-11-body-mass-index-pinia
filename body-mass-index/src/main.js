import { createApp } from 'vue'
import { createPinia } from 'pinia'


import './style.css'

import App from './App.vue'


//Below is the default way to create the app.
//createApp(App).mount('#app')

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.mount('#app')