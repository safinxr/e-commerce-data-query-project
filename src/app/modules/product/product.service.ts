import { Product } from "./product.interface";
import { ProductModule } from "./product.model";

// Create Product into database
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

// Find all data
const findAllData = async () => {
  const result = await ProductModule.find();
  return {
    data: result,
    message: "All product found successfully",
  };
};

// Find product by id
const findOneData = async (productId: string) => {
  const result = await ProductModule.findOne({ _id: productId });
  return {
    data: result,
    message: "product found by id successfully",
  };
};

//Update product by id
const updateOneData = async (productId: string, product: Product) => {
  const UpdatedResult = await ProductModule.updateOne(
    { _id: productId },
    { $set: product },
  );
  return {
    data: UpdatedResult,
    message: "product update by id successfully",
  };
};

// Delete product by id
const deleteOneData = async (productId: string) => {
  const result = await ProductModule.deleteOne({_id:productId})
  return {
    data: result,
    message: "product delete by id successfully",
  };
};

export const productServices = {
  createdProductIntoDB,
  findAllData,
  findOneData,
  updateOneData,
  deleteOneData,
};
