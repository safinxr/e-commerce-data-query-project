import { Request, Response } from "express";
import { productServices } from "./product.service";
import productSchemaValidation from "./product.validation";
import { error, success } from "./product.config/try.catch.res";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodValidation = productSchemaValidation.parse(productData);
    const result = await productServices.createdProductIntoDB(zodValidation);
    if (!result.data) {
      throw new Error();
    }
    res.status(200).json(success(result.message, result.data));
  } catch (err: any) {
    res.status(500).json(error("Something went wrong", err));
  }
};

const findAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.findAllData();
    if (!result.data) {
      throw new Error();
    }
    res.status(200).json(success(result.message, result.data));
  } catch (err) {
    res.status(500).json(error("Something went wrong", err));
  }
};
const findOneProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productServices.findOneData(productId);
    if (!result.data) {
      throw new Error();
    }
    res.status(200).json(success(result.message, result.data));
  } catch (err) {
    res.status(500).json(error("Something went wrong", err));
  }
};


export const productController = {
  createProduct,
  findAllProduct,
  findOneProduct,
};
