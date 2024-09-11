import {z} from 'zod'

const requiredString = z.string().trim().min(1,"Required")

export const signUpSchema = z.object({
    email:requiredString.email("Invalid email address"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_-]+$/,
        "Only letters, numbersn - and _ allowed"
    ),
    password:requiredString.min(8,'Must be atleast 8 characters')
})

export const loginSchema = z.object({
    username:requiredString,
    password:requiredString
})

export type SignUpValues = z.infer<typeof signUpSchema>
export type LoginValues = z.infer<typeof loginSchema>