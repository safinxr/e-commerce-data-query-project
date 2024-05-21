import cors from "cors";
import express, { Application, Request, Response } from "express";
import { productRoute } from "./app/modules/product/product.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(500).send("Hello welcome to Ecommerce data api");
});

export default app;
