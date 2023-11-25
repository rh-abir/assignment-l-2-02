import { z } from 'zod'

const FullNameSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
})

const AddressSchema = z.object({
  street: z.string().min(2),
  city: z.string().min(2),
  country: z.string().min(2),
})

const OrderSchema = z.object({
  productName: z.string().min(1),
  price: z.number().min(0),
  quantity: z.number().min(1),
})

const UserValidationSchema = z.object({
  userId: z.number().min(1),
  username: z.string().min(1).max(20),
  password: z.string(),
  fullName: FullNameSchema,
  age: z.number().min(1),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string().min(1).max(255)),
  address: AddressSchema,
  orders: z.array(OrderSchema),
})

export default UserValidationSchema
