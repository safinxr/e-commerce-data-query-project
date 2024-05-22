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
    }
  );
  return {
    data: result,
    message: "order created successfully",
  };
};

export const orderService = {
  createNewOrder,
};
