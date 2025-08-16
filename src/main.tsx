// Import For React 
import { StrictMode } from 'react'
// Import For React Dom
import { createRoot } from 'react-dom/client'
// Import Component APP
import App from './App.tsx'
// Import Styles
import './index.css'

// Render For App In Element Root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
