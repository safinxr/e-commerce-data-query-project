import { z } from "zod";

const variantSchemaValidation = z.object({
  type: z.string().min(1, "Type is required"),
  value: z.string().min(1, "Value is required"),
});

const inventorySchemaValidation = z.object({
  quantity: z.number().min(0, "Quantity must be a positive number (Zod)"),
  inStock: z.boolean(),
});

const productSchemaValidation = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string().min(1, "Tag cannot be empty")),
  variants: z
    .array(variantSchemaValidation)
    .min(2, "variants At least need 2 types"),
  inventory: inventorySchemaValidation,
});

export default productSchemaValidation;
