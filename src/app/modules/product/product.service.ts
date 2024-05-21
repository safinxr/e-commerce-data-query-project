import { Product } from "./product.interface";
import { ProductModule } from "./product.model";

const createdProductIntoDB = async(product:Product) =>{
    const result = await ProductModule.create(product);
    return result;
}

export const productServices = {
    createdProductIntoDB,
}
