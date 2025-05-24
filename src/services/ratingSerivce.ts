import { RateRepository } from "../dal/repositories/reateRepository";
import { rateType } from "../type/ratingType";

export class RateService{
    private db: RateRepository
    constructor(repository: RateRepository = new RateRepository()){
        this.db = repository
    }

    async sendNewRating(ratingData: rateType):Promise<boolean>{
        try{
            const dbResponse = await this.db.sendRate(ratingData);
            if(dbResponse != true){
                return false;
            }

            return true;
        }catch(error){
            throw error
        }
    }

    async getShoppingRates(shopping: string): Promise<rateType[] | void[]>{
        try{
            const dbResponse = await this.db.getShoppingRates(shopping);
            return dbResponse
        }catch(error){
            throw error
        }
    }

    async listAllRate():Promise<rateType[]>{
        try{
            const dbResponse = await this.db.listAllRates();
            if(!dbResponse){
                throw Error
            }

            return dbResponse
        }catch(error){
            throw error
        }
    }
}