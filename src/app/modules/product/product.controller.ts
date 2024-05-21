import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async(req:Request, res:Response) =>{
    try{
        const productData = req.body;
        const result = await productServices.createdProductIntoDB(productData);
         res.status(200).json({
           success: true,
           message: "Product is created successfully",
           data: result,
         });
    }catch(err){
      res.status(500).json({
        success: false,
        message: "Product creation failed",
        data: err,
      });
    }

}

export const productController = {
  createProduct,
}