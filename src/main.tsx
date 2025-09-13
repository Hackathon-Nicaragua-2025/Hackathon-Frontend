// Import For React 
import { StrictMode } from 'react'
// Import For React DOM
import { createRoot } from 'react-dom/client'
// Import For ErrorBoundary
import ErrorBoundary from './ErrorBoundary.tsx'
// Import For Router Dom
import { BrowserRouter } from 'react-router-dom'
// Import For App
import App from './App.tsx'
// Import For Style
import './assets/styles/index.css'

// Render For App 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
