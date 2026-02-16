import express from "express";
import { addToCart, getUserCart, updateCart } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add", addToCart);
cartRouter.get("/get", getUserCart);
cartRouter.put("/update", updateCart);

export default cartRouter;