// Import For React Router Dom
import { Link } from "react-router-dom"
// Import For Component
import { CustomForm, Network } from "../../components"
// Import For Hooks
import useWindowSize from "../../hooks/useWindowSize"
// Import Img
import iconNegative from "../../assets/img/iconNegative.png"
import textIcon from "../../assets/img/textIcon.png"
import textIconCompleto from "../../assets/img/textIconComplet.png"
// Import Style
import "./login.scss"

// Page Login
const Login = () => {
  // UseWindowSize
  const { width } = useWindowSize()

  // Condition
  const laptop = width > 1024

  return (
    <>
      {/* Background & Icon */}
      <div className="flex items-center justify-center h-[55dvh] bg-[url(../assets/img/reservaNaturalLeon.jpg)] bg-cover bg-center lg:hidden">
        <img className="max-w-32 md:max-w-40" src={iconNegative} alt="Icon Avify" />
      </div>
      {/* Title & Form */}
      <div className="absolute top-[40dvh] w-full h-[45dvh] rounded-t-4xl bg-[#eaf0f4] lg:relative lg:top-0 lg:flex lg:h-[100dvh] lg:rounded-none ">
        <div className="clip-path flex items-center justify-center h-[160px] rounded-t-4xl bg-gradient-to-br from-[#064020] to-[#1c334d] md:h-[250px] lg:w-1/2 lg:h-full lg:rounded-t-none">
          <img className="max-w-38 md:max-w-46 lg:hidden" src={textIcon} alt="Text Icon" />
          <img className="hidden lg:block lg:w-1/4" src={textIconCompleto} alt="Text Icon Completo" />
        </div>
        <div className="mt-4 md:mt-8 lg:flex lg:flex-col lg:justify-center lg:w-1/2 lg:gap-4">
          <h2 className="hidden lg:block lg:text-4xl lg:text-center lg:font-bold lg:text-[#13373B]">Welcome Back!</h2>
          {/* Form Login */}
          <CustomForm />
          {/* Link Register */}
          <Link to="/register" className="block text-sm text-center mt-4 text-[#242155] md:text-lg md:mt-8 lg:text-base lg:mt-8">
            Or log in with a
            <span className="font-bold text-[#3F6C5E]"> social network</span>
          </Link>
          {
            laptop ? (
              <Network string={false} />
            ) : (
              ""
            )
          }
        </div>
      </div>
    </>
  )
}

// Export Default Page Login
export default Login
