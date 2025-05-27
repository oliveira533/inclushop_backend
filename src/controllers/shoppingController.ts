import { Request, Response, NextFunction } from "express";
import { ShoppingService } from "../services/shoppingService";
import { shoppingType } from "../type/shoppingType";

export class ShoppingController{
    private readonly service;

    constructor(service = new ShoppingService()){
        this.service = service;
    }

    async createShopping(req: Request, res: Response, next: NextFunction){
        try{
            console.log("chegou no controller")
            const body: shoppingType = req.body;

            const response: boolean = await this.service.createShopping(body);

            if(response == false){
                res.status(500).send({error: "insernal server error"});
            }
            res.status(201).send({mensagem: "shopping criado"})
        }catch(err){
            console.log(err);
            res.status(500).send({error: err});
        }
    }

    async getShoppingInfos(req: Request, res: Response, next: NextFunction){
        try{
            const response: shoppingType | null = await this.service.getShopping(req.params.shopping);

            if(!response){
                res.status(500).send({error: "insernal server error"});
            }

            res.status(200).send(response)
        }catch(err){
            console.log(err);
            res.status(500).send({error: err});
        }
    }
}