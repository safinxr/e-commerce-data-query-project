import express from "express"
import { orderController } from "./order.controller";

const router = express.Router();

router.post("/create-order", orderController.createOrderController)

export const orderRoute = router;