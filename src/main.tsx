// Import For React 
import { StrictMode } from 'react'
// Import For React Dom
import { createRoot } from 'react-dom/client'
// Import Error Boundary
import ErrorBoundary from "./ErrorBoundary"
// Import Router
import { BrowserRouter } from 'react-router-dom'
// Import Component App
import App from './App.tsx'
// Import Styles
import "./styles/input.css"
import "./styles/main.scss"

// Render For App In Element Root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
