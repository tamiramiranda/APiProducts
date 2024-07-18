import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueNumberFormat from 'vue-number-format'

const app = createApp(App)

app.use(VueNumberFormat, {prefix: 'R$ ', decimal: ',', thousand: '.', precision: 2})

app.use(createPinia())
app.use(router)

app.mount('#app')
