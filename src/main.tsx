import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/bootstrap.min.css'
import './css/style.css'
import './css/vendors.min.css'
import './css/custom.css'
import './css/bs-icon-font/bootstrap-icons.min.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
