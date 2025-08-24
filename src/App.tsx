// Import For React
import { lazy, Suspense } from "react"
// Import Router
import { Routes, Route } from "react-router-dom"
// Import Routes Page
const Login = lazy(() => import("./routes/login/Login"))
const Register = lazy(() => import("./routes/register/register"))
// Import Icon
import iconNormal from "./assets/img/iconNormal.png"

// Component App
function App() {
  return (
    // Pantalla de Carga
    <Suspense fallback={
      <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-[#B9BCC5]">
        <img className="w-1/2" src={iconNormal} alt="Icon Avify" />
      </div>
    }>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        {/* Register */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  )
}

// Export Default Component App
export default App
