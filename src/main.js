import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import { authServiceInstance, TOKEN_KEY } from './API/authService'

const token = localStorage.getItem(TOKEN_KEY)

if (token) {
    authServiceInstance.setToken(token)
}

createApp(App).use(router).mount('#app')
