import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/create-product", productController.createProduct);
router.get("/", productController.findAllProduct);
router.get("/:productId", productController.findOneProduct);
router.put("/:productId", productController.UpdateOneProduct);
router.delete("/:productId", productController.DeleteOneProduct);

export const productRoute = router;
