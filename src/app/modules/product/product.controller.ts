import { Request, Response } from "express";
import { productServices } from "./product.service";
import productSchemaValidation from "./product.validation";
import { error, success } from "./product.config/try.catch.res";

// Create Product into database
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodValidation = productSchemaValidation.parse(productData);
    const result = await productServices.createdProductIntoDB(zodValidation);
    if (!result.data) {
      throw new Error();
    }
    res.status(200).json(success(result.message, result.data));
  } catch (err) {
    res.status(500).json(error("product creation Unsuccessful! Something went wrong", err));
  }
};

// Find all data
const findAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.findAllData();
    if (!result.data) {
      throw new Error();
    }
    res.status(200).json(success(result.message, result.data));
  } catch (err) {
    res.status(500).json(error("Can't find any product! Something went wrong", err));
  }
};

// Find product by id
const findOneProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productServices.findOneData(productId);
    if (!result.data) {
      throw new Error();
    }
    res.status(200).json(success(result.message, result.data));
  } catch (err) {
    res.status(500).json(error("Can't find product by id! Something went wrong", err));
  }
};

// Update product by id
const UpdateOneProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productData = req.body;
    const result = await productServices.updateOneData(productId, productData);
    if (!result.data.acknowledged) {
      throw new Error();
    }
    res.status(200).json(success(result.message, result.data));
  } catch (err) {
    res.status(500).json(error("Update unsuccessful! Something went wrong", err));
  }
};

export const productController = {
  createProduct,
  findAllProduct,
  findOneProduct,
  UpdateOneProduct,
};
