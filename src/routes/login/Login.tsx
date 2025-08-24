// Import For React Router Dom
import { Link } from "react-router-dom"
// Import For Component
import { CustomForm } from "../../components"
// Import Icon
import iconNegative from "../../assets/img/iconNegative.png"
// Import Style
import "./login.scss"

// Page Login
const Login = () => {
  return (
    <>
      {/* Background & Icon */}
      <div className="flex items-center justify-center h-[50vh] bg-[url(../assets/img/reservaNaturalLeon.jpg)] bg-cover bg-center">
        <img className="w-1/3" src={iconNegative} alt="Icon Avify" />
      </div>
      {/* Title & Form */}
      <div className="absolute top-[40vh] w-full h-[60vh] rounded-t-4xl bg-[#EAF0F4]">
        <div className="clip-path flex items-center justify-center h-[150px] rounded-t-4xl bg-gradient-to-br from-[#064020] to-[#1c334d]">
          <h2 className="text-center font-bold text-4xl text-white">Avify</h2>
        </div>
        {/* Form Login */}
        <CustomForm />
        {/* Link Register */}
        <Link to="/register" className="block text-sm text-center mt-4 text-[#242155]">
          Don't have an account?
          <span className="font-bold text-[#3F6C5E]">Register</span>
        </Link>
      </div>
    </>
  )
}

// Export Default Page Login
export default Login
