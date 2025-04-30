import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import ls from "@livesession/browser";

import './index.css'
import App from './App.jsx'

try {
    ls.init(import.meta.env.VITE_LIVESESSION_TRACK_ID || "YOUR_TRACK_ID")
    ls.newPageView()
} catch(e) {
    console.error(e)
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
