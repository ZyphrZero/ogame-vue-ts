import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Capacitor } from '@capacitor/core'
import { StatusBar, Style } from '@capacitor/status-bar'
import './style.css'
import App from './App.vue'
import router from './router'

// Android 设置状态栏
if (Capacitor.isNativePlatform()) {
  StatusBar.setBackgroundColor({ color: '#1a1a2e' })
  StatusBar.setStyle({ style: Style.Dark })
  StatusBar.setOverlaysWebView({ overlay: false })
}

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
