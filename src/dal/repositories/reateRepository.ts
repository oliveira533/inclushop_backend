import { FirebaseDatabase } from "../firebase";
import { rateType } from "../../type/ratingType";
import { where } from "firebase/firestore";


export class RateRepository{
    readonly db: FirebaseDatabase<rateType>

    constructor(firebase: FirebaseDatabase<rateType> = new FirebaseDatabase<rateType>("rating")){
        this.db = firebase
    }

    async sendRate(rating: rateType):Promise<boolean>{
        try{
            const document = await this.db.create(rating);
            if(!document){
                return false;
            }
            return true;
        }
        catch(error){
            throw error
        }
    }

    async listAllRates(): Promise<rateType[] | null>{
        try{
            const documents: rateType[] = await this.db.readAll();

            if(!documents){
                return null
            }

            return documents
        }catch(error){
            throw error
        }
    }

    async getShoppingRates(shopping: string): Promise<rateType[] | void[]>{
        try{
            const documents: rateType[] = await this.db.query([where("shopping", "==", shopping)]);
            if(!documents){
                return [];
            }

            return documents;
        }catch(error){
            throw error
        }
    }
}