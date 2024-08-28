import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { plugin as FormKitPlugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(FormKitPlugin, defaultConfig)
app.mount('#app')
