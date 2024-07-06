import { z } from 'zod'

export const usernamValidation = z
    .string()
    .min(6, { message: "Username must be atleast 6 character" })
    .max(20, { message: "Username is not greater than 20 character" })
    .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special character")

export const signUpSchema = z.object({
    username: usernamValidation,
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: "Password atleast 6 character" })
})