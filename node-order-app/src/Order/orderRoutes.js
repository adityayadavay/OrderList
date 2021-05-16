import express from "express";
import OrderController from "./OrderController";

const objOrder = new OrderController();
const OrderRoute = express.Router();

OrderRoute.post("/order", objOrder.addOrder);
OrderRoute.get("/order", objOrder.getOrders);
OrderRoute.put("/order", objOrder.updateOrder);
OrderRoute.delete("/order", objOrder.deleteOrder);

export default OrderRoute;
