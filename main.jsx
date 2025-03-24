import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './components/LandingPage.jsx'
import Navbar from './components/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LandingPage />
  </StrictMode>,
)
