// Import For React
import { Suspense } from "react"
// Import For Assets
import LogoNormal from './assets/image/LogoNormal.svg'
// Import For Pages
import Home from "./pages/Home"

// Component App
function App() {
  return (
    // Page Loading
    <Suspense fallback={
      <div className="flex items-center justify-center h-dvh">
        <img src={LogoNormal} alt="Logo Avify" className="w-1/4" />
      </div>
    }>
      {/* Page */}
      <Home />
    </Suspense>
  )
}

// Export App
export default App
