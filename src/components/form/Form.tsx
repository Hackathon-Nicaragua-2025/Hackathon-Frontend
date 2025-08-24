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
      <a href="#" className="block text-sm text-right pr-12 text-[#242155]">Forgot Password?</a>
      {/* Button Submit */}
      <button type="submit" className="block w-[80%] mx-auto mt-8 py-2 font-semibold rounded-4xl border border-[#242155] bg-white text-[#242155]">Login</button>
    </form>
  )
}