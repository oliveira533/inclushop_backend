import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/userService";
import { loginUserType, userType } from "../type/userType";

export class UserControler{
    private readonly service;
    constructor(service = new UserService()){
        this.service = service;
    }

    async createNewUser(req: Request, res: Response, next: NextFunction){
        try{
            const body: userType = req.body;
        
            await this.service.createNewUser(body);

            return res.status(201).send({message:"usuário criado com sucesso"});
        }catch(err){
            console.log(err);
            res.status(500).send({error: err})
        }
    }

    async validateUser(req: Request, res: Response, next: NextFunction){
        try{
            const body: loginUserType = req.body;
        
            const response = await this.service.loginUser(body);

            if(response == true){
                return res.status(201).send({message:"usuário validado"});
            }
            res.status(401).send({error: "usuário não validado"})


        }catch(err){
            console.log(err);
            res.status(500).send({error: err})
        }
    }
}