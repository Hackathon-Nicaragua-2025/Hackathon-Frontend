// Import React Hook Form
import { Controller, type Control, type FieldError } from "react-hook-form"
// Import Models
import type { FormValueLogin } from "../../types/schema";
// Import Style
import "./input.scss"

// Interface Props
interface InputProps {
  name: keyof FormValueLogin;
  type?: string;
  placeholder?: string;
  error?: FieldError;
  control: Control<FormValueLogin>;
}

// Input Component
export const InputForm = ({ name, type, placeholder, control, error }: InputProps) => {
  return (
    <div className="form-group">
      <Controller
        name={name}
        control={control}
        render={({ field }) => <input id={name} type={type} placeholder={placeholder} {...field} className={`form-control ${error ? "is-invalid" : ""}`} />}
      />
    </div>
  )
};