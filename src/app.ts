import cors from "cors";
import express, { Application, Request, Response } from "express";
import { productRoute } from "./app/modules/product/product.route";
import {
  error,
  success,
} from "./app/modules/product/product.config/try.catch.res";
import { orderRoute } from "./app/modules/order/order.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json(success("Hello welcome to E-commerce Data API ", {}));
  } catch (err) {
    res.status(500).json(error("Sorry something went wrong", err));
  }
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json(error("Route is not found", {}));
});

export default app;
