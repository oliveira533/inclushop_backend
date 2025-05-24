import express from "express";
import { Request, Response, NextFunction } from "express";
import { UserControler } from "../controllers/userController";

export const userRouter = express.Router();
const controller = new UserControler(); 

userRouter.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

userRouter.post("/new/user",(req: Request, res: Response, next: NextFunction)=>{
    controller.createNewUser(req, res, next);
});

userRouter.post("/validate/user",(req: Request, res: Response, next: NextFunction)=>{
    controller.validateUser(req, res, next);
})