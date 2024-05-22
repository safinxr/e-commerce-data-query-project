import { Request, Response } from "express";
import { orderService } from "./order.service";
import { error, success } from "../product/product.config/try.catch.res";
import { zodOrderSchema } from "./order.validation";

const createOrderController = async (req: Request, res: Response) => {
  try {
    const orderInfo = req.body;
    const zodValidation = zodOrderSchema.parse(orderInfo)
    const orderResult = await orderService.createNewOrder(zodValidation);
    res.status(200).json(success(orderResult.message, orderResult.data));
  } catch (err) {
    res.status(500).json(error("Order creation unsuccessful! Something went wrong", err));
  }
};


export const orderController = {
    createOrderController,
}
