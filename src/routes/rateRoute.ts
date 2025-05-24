import express from "express";
import { Request, Response, NextFunction } from "express";
import { RateController } from "../controllers/rateController";

export const rateRoute = express.Router();
const constroller = new RateController();

rateRoute.use((req: Request, res: Response, next: NextFunction)=>{
    next();
})

rateRoute.post("/new/rate",(req: Request, res: Response, next: NextFunction)=>{
    constroller.sendRate(req, res, next)
})

rateRoute.get("/shopping/rate/:shopping",(req: Request, res: Response, next: NextFunction)=>{
    constroller.getShoppingRate(req, res, next)
})

rateRoute.get("/shopping/rates/",(req: Request, res: Response, next: NextFunction)=>{
    constroller.listAllRate(req, res, next)
})