import express from "express";
import {
  getAllProducts,
  PostProducts,
  DeleteProduct,
} from "../Controllers/productController.js";

export const productRouter = express.Router();
productRouter.get("/", getAllProducts);
productRouter.post("/", PostProducts);
productRouter.delete("/:id", DeleteProduct);
