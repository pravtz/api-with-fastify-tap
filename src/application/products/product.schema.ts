import {z} from 'zod'

const productInput = {
    name: z.string(),
    price: z.number()
    
}

const productGenerated = {
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
}

const CreateProductSchema = z.object({
    ...productInput
})
export type CreateProductInput = z.infer<typeof CreateProductSchema>

