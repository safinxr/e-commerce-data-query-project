import { ProductModule } from "../product/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createNewOrder = async (orderInfo: Order) => {
  const result = await OrderModel.create(orderInfo);
  await ProductModule.updateOne(
    { _id: orderInfo.productId },
    {
      $inc: {
        "inventory.quantity": -orderInfo.quantity,
      },
    },
  );
  return {
    data: result,
    message: "order created successfully",
  };
};

const findOrder = async (orderEmail: string) => {
  if (orderEmail !== "non") {
    const result = await OrderModel.find({ email: orderEmail });
    return {
      data: result,
      message: "Order find by email",
    };
  } else {
    const result = await OrderModel.find();
    return {
      data: result,
      message: "All order found successfully",
    };
  }
};

export const orderService = {
  createNewOrder,
  findOrder,
};
