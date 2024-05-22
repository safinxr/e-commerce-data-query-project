import { Request, Response } from "express";
import { productServices } from "./product.service";
import productSchemaValidation from "./product.validation";
import { error, success } from "./product.config/try.catch.res";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodValidation = productSchemaValidation.parse(productData);
    const result = await productServices.createdProductIntoDB(zodValidation);
    if(!result.data){
      console.log("object");
      throw new Error()
    }
    res.status(200).json(success(result.message, result.data));
  } catch (err: any) {
    console.log(err);
    res.status(500).json(error(err.message|| "Something went wrong", err));
  }
};

export const productController = {
  createProduct,
};
