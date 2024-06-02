import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.findAllProduct);
router.get("/:productId", productController.findOneProduct);
router.put("/:productId", productController.updateOneProduct);
router.delete("/:productId", productController.deleteOneProduct);

export const productRoute = router;
