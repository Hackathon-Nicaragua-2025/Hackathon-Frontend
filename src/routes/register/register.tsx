// Import For React Router Dom
import { Link } from "react-router-dom"
// Import For Component
import { InputCorp } from "../../components"
// Import For React Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa"
// Import For Style
import "../login/login.scss"

// Page Register
const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[35vh] bg-[url(../assets/img/reservasNaturalesNicaragua.webp)] bg-cover bg-center">
      </div>
      <div className="absolute top-[30vh] w-full h-[60vh] rounded-t-4xl bg-[#EAF0F4]">
        <div className="clip-path flex items-center justify-center h-[150px] rounded-t-4xl bg-gradient-to-br from-[#064020] to-[#1c334d]">
          <h2 className="text-center font-bold text-4xl text-white">Avify</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-[80%] mx-auto mt-8">
          <InputCorp icon={<FaGoogle />}>Continue with Google</InputCorp>
          <InputCorp icon={<FaFacebook />}>Continue with Facebook</InputCorp>
          <InputCorp icon={<FaApple />}>Continue with Apple</InputCorp>
        </div>
        <Link to="/" className="block text-sm text-center mt-8 text-[#242155]">Already have an account? <br />
          <span className="font-bold text-[#3F6C5E]">Login</span>
        </Link>
      </div>
    </>
  )
}

// Export Default Page Register
export default Register
