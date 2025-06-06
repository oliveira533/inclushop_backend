import { ShoppingRepository } from "../dal/repositories/shoppingRepository"; 
import { shoppingType } from "../type/shoppingType";

export class ShoppingService{
    private db: ShoppingRepository
    constructor(respository: ShoppingRepository = new ShoppingRepository()){
        this.db = respository
    }

    async createShopping(shoppingData: shoppingType):Promise<boolean>{
        try{
            console.log("Chegou no service")
            const dbResponse = await this.db.createShopping(shoppingData);

            if(dbResponse != true){
                return false;
            }
            
            return true;
        }
        catch(error){
            throw error
        }
    }

    async getShopping(shoppingId: string): Promise<shoppingType | null> {
        try {
            const dbResponse = await this.db.getShoppingInfos(shoppingId);
            if (!dbResponse) {
                return null;
            }
            return dbResponse as shoppingType;
        } catch (error) {
            throw error;
        }
    }
}