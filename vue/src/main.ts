import { createApp } from 'vue'

import ls from "@livesession/sdk";

import './style.css'
import App from './App.vue'

try {
    ls.init(import.meta.env.VITE_LIVESESSION_TRACK_ID || "YOUR_TRACK_ID")
    ls.newPageView()
} catch(e) {
    console.error(e)
}

createApp(App).mount('#app')
