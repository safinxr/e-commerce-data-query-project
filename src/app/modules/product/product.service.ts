import { Product } from "./product.interface";
import { ProductModule } from "./product.model";

const createdProductIntoDB = async (product: Product) => {
  const docQuery = { ...product };
  delete docQuery.inventory;

  const isExist = await ProductModule.findOne(docQuery);

  if (isExist) {
    const quantityInDB = isExist.inventory?.quantity as number;
    const quantityInNewData = product.inventory?.quantity as number;
    const updateQuantity = await ProductModule.updateOne(
      { _id: isExist._id },
      {
        $set: {
          "inventory.quantity": quantityInDB + quantityInNewData,
        },
      },
    );
    return {
      data: updateQuantity,
      message: "Product already exists. Product quantity update Successful",
    };
  }

  const result = await ProductModule.create(product);
  return {
    data: result,
    message: "Product is created successfully",
  };
};

const findAllData = async () =>{
  const result =await ProductModule.find()
  return result
}

export const productServices = {
  createdProductIntoDB,
  findAllData,
};
