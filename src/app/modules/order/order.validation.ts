import z from 'zod';


export const zodOrderSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  productId: z.string().min(1, "Product ID is required"),
  price: z.number().positive("Price must be a positive number").min(0.01, "Price must be greater than 0"),
  quantity: z.number().int("Quantity must be an integer").min(1, "Quantity must be at least 1"),
});