import { ProductModule } from "../product/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createNewOrder = async (orderInfo: Order) => {
  const product = await ProductModule.findOne({ _id: orderInfo.productId });
  if ((product?.inventory?.quantity ?? 0) - orderInfo.quantity < 0) {
    return "x";
  }
  const result = await OrderModel.create(orderInfo);
  if ((product?.inventory?.quantity ?? 0) - orderInfo.quantity === 0) {
    await ProductModule.updateOne(
      { _id: orderInfo.productId },
      {
        $set: {
          "inventory.quantity": 0,
          "inventory.inStock": false,
        },
      },
    );
  } else {
    await ProductModule.updateOne(
      { _id: orderInfo.productId },
      {
        $inc: {
          "inventory.quantity": -orderInfo.quantity,
        },
      },
    );
  }

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
