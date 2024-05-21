import { Request, Response } from "express";
import { productServices } from "./product.service";
import productSchemaValidation from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodValidation = productSchemaValidation.parse(productData)
    const result = await productServices.createdProductIntoDB(zodValidation);
    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product creation failed",
      data: err,
    });
  }
};

export const productController = {
  createProduct,
};
