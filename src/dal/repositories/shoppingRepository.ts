import { FirebaseDatabase } from "../firebase";
import { shoppingType } from "../../type/shoppingType";
import { where } from "firebase/firestore";

export class ShoppingRepository{
    readonly db : FirebaseDatabase<shoppingType>

    constructor(firebase: FirebaseDatabase<shoppingType> = new FirebaseDatabase<shoppingType>("shoppings")){
        this.db = firebase
    }

    async createShopping(shoppingData: shoppingType): Promise<boolean>{
        try{
            console.log("Chegou no repository");
            const document = await this.db.create(shoppingData);
            if(!document){
                return false;
            }
            return true;
        }catch(error){
            throw error
        }
    }

    async getShoppingInfos(shopping: string){
        try{
            const documents: shoppingType[] = await this.db.query([where("cep", "==", shopping)]);
            if(!documents){
                return {};
            }

            return documents[0];
        }catch(error){
            throw error
        }
    }
}