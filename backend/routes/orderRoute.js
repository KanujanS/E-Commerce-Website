import express from "express";
import { placeOrder, placeOrderPaypal, allOrders, userOrders, updateStatus } from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/placepaypal", authUser, placeOrderPaypal);

// User features
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;