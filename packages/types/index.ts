import { z } from 'zod'

export const userSignup = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(5)
})

export const userLogin = z.object({
    email: z.email(),
    password: z.string()
})

export const website = z.object({
    url: z.string().url("Invalid url")
})