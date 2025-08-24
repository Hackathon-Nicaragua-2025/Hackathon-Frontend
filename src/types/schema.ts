// Import For Zod
import { z } from "zod"

// Esquema de Login
export const schemaLogin = z.object({
  email: z.string().email("El Correo es Invalido").min(6, "El Correo debe tener al menos 6 caracteres"),
  password: z.string().min(6, "La Contraseña debe tener al menos 6 caracteres"),
})

// Inferencia de Tipos Login
export type FormValueLogin = z.infer<typeof schemaLogin>
