// Import For Component
import { InputCorp } from "../inputCorp/InputCorp"
// Import For React Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa"

// Interface Props
interface NetworkProps {
  string: boolean;
}

export const Network = ({ string }: NetworkProps) => {
  return (
    <div className="flex flex-col gap-4 w-[80%] mx-auto mt-12 lg:flex-row lg:justify-center lg:items-center lg:w-fit lg:gap-8 lg:mt-0">
      <InputCorp icon={<FaGoogle />}>{string ? "Continue with Google" : ""}</InputCorp>
      <InputCorp icon={<FaFacebook />}>{string ? "Continue with Facebook" : ""}</InputCorp>
      <InputCorp icon={<FaApple />}>{string ? "Continue with Apple" : ""}</InputCorp>
    </div>
  )
}