import { Order } from "./order.interface";
import { Schema, model } from "mongoose";

const orderSchema = new Schema<Order>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});


export const OrderModel = model<Order>("order", orderSchema)

