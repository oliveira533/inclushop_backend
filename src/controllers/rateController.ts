import { Request, Response, NextFunction } from "express";
import { RateService } from "../services/ratingSerivce";
import { rateType } from "../type/ratingType";

export class RateController{
    private readonly service;

    constructor(service = new RateService()){
        this.service = service;
    }

    async sendRate(req: Request, res: Response, next: NextFunction){
        try{
            const body: rateType = req.body;

            const response: boolean = await this.service.sendNewRating(body);
            
            if(response == false){
                res.status(500).send({error: "Avaliação não foi salva"});
            }
            res.status(200).send({mensagem: "Avaliação criada"})
        }catch(err){
            console.log(err);
            res.status(500).send({error: err});
        }
    }

    async getShoppingRate(req: Request, res: Response, next: NextFunction){
        try{
            const body: string = req.params.shopping;

            const response: rateType[] | void[] = await this.service.getShoppingRates(body);
            
            res.status(200).send(response)
        }catch(err){
            console.log(err);
            res.status(500).send({error: err});
        }
    }

    async listAllRate(req: Request, res: Response, next: NextFunction){
        try{
            const response: rateType[] | void[] = await this.service.listAllRate();

            res.status(200).send(response)
        }catch(err){
            console.log(err);

            res.status(500).send({error: err});
        }
    }
}