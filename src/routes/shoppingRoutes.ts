import express from "express";
import { Request, Response, NextFunction } from "express";
import { ShoppingController } from "../controllers/shoppingController";

export const shoppingRoute = express.Router();
const controller = new ShoppingController();

shoppingRoute.use((req: Request, res: Response, next: NextFunction)=>{
    next();
});

shoppingRoute.post("/new/shopping",(req: Request, res: Response, next: NextFunction)=>{
    controller.createShopping(req, res, next);
})