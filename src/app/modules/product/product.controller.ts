import { Request, Response } from "express";
import { productServices } from "./product.service";
import { error, success } from "./product.config/try.catch.res";
import productSchemaValidation from "./product.validation";

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
    res
      .status(500)
      .json(error("product creation Unsuccessful! Something went wrong", err));
  }
};

// Find all data $ search data
const findAllProduct = async (req: Request, res: Response) => {
  try {
    if (req.query.searchTerm) {
      const searchTerm = req.query.searchTerm;
      const result = await productServices.findAllData(searchTerm as string);

      if (!result.data.length) {
        throw new Error();
      }
      res.status(200).json(success(result.message, result.data));
    } else {
      const result = await productServices.findAllData("non");
      if (!result.data) {
        throw new Error();
      }
      res.status(200).json(success(result.message, result.data));
    }
  } catch (err) {
    res
      .status(500)
      .json(error("Can't find any product! Something went wrong", err));
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
    res
      .status(500)
      .json(error("Can't find product by id! Something went wrong", err));
  }
};

// Update product by id
const updateOneProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productData = req.body;
    const updateData = await productServices.updateOneData(
      productId,
      productData,
    );
    if (!updateData.data.acknowledged) {
      throw new Error();
    }
    const result = await productServices.findOneData(productId);

    res
      .status(200)
      .json(success("product update by id successfully", result.data));
  } catch (err) {
    res
      .status(500)
      .json(error("Update unsuccessful! Something went wrong", err));
  }
};

// Delete product by id
const deleteOneProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productServices.deleteOneData(productId);
    if (!result.data) {
      throw new Error();
    }
    res.status(200).json(success(result.message, result.data));
  } catch (err) {
    res
      .status(500)
      .json(error("Can't delete product by id! Something went wrong", err));
  }
};

export const productController = {
  createProduct,
  findAllProduct,
  findOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
