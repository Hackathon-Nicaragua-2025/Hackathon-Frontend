// Import For React Hook Form
import { useForm, type SubmitHandler } from 'react-hook-form'
// Import Resolvers
import { zodResolver } from '@hookform/resolvers/zod'
// Import Models
import { schemaLogin, type FormValueLogin } from '../../types/schema'
// Import Components
import { InputForm } from '../input/Input'


// Component Form
export const CustomForm = () => {
  // UseForm
  const { control, handleSubmit, formState: { errors } } = useForm<FormValueLogin>({
    resolver: zodResolver(schemaLogin),
    mode: "onBlur",
  })

  // Handle Submit
  const onSubmit: SubmitHandler<FormValueLogin> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form Email */}
      <InputForm name='email' control={control} type='email' placeholder='Enter your email' error={errors.email} />
      {/* Form Password */}
      <InputForm name='password' control={control} type='password' placeholder='Enter your password' error={errors.password} />
      {/* Link Forgot Password */}
      <a href="#" className="block text-xs text-right pr-12 text-[#242155] md:text-base md:pr-24 md:mt-4 lg:text-sm lg:pr-34 lg:mt-4 hover:underline">Forgot Password?</a>
      {/* Button Submit */}
      <button type="submit" className="block w-[80%] mx-auto mt-4 py-1 font-semibold rounded-4xl border border-[#242155] bg-white text-[#242155] md:w-[50%] md:mt-8 md:py-3 md:text-lg lg:w-[60%] lg:mt-4 lg:py-2 lg:text-base lg:font-bold cursor-pointer hover:bg-[#183407] hover:text-white duration-300">Login</button>
    </form>
  )
}