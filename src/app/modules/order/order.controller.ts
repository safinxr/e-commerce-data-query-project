import { Request, Response } from "express";
import { orderService } from "./order.service";
import { error, success } from "../product/product.config/try.catch.res";
import { zodOrderSchema } from "./order.validation";

const createOrderController = async (req: Request, res: Response) => {
  try {
    const orderInfo = req.body;
    const zodValidation = zodOrderSchema.parse(orderInfo);
    const orderResult = await orderService.createNewOrder(zodValidation);
    res.status(200).json(success(orderResult.message, orderResult.data));
  } catch (err) {
    res
      .status(500)
      .json(error("Order creation unsuccessful! Something went wrong", err));
  }
};

const findAllOrder = async (req: Request, res: Response) => {
  try {
    if (req.query.email) {
      const email = req.query.email;
      const result = await orderService.findOrder(email as string);

      if (!result.data) {
        throw new Error();
      }
      res.status(200).json(success(result.message, result.data));
    } else {
      const result = await orderService.findOrder("non");
      if (!result.data.length) {
        throw new Error();
      }
      res.status(200).json(success(result.message, result.data));
    }
  } catch (err) {
    res
      .status(500)
      .json(error("Can't find any order! Something went wrong", err));
  }
};

export const orderController = {
  createOrderController,
  findAllOrder,
};
