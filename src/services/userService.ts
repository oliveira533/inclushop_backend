import { UserRepository } from "../dal/repositories/userRepository";
import { userType, loginUserType } from "../type/userType";

export class UserService{
    private db: UserRepository
    constructor(respository: UserRepository = new UserRepository()){
        this.db = respository
    }

    async createNewUser(userData: userType):Promise<boolean>{
        try{
            const dbResponse = await this.db.createUser(userData);

            if(dbResponse == false){
                return false;
            }
            
            return true;
        }
        catch(error){
            throw error
        }
    }

    async loginUser(userData: loginUserType): Promise<boolean>{
        try{
            const user = await this.db.validateUser(userData.documment);
            
            if (!user) {
                return false;
            }

            return user.password === userData.password;
        }catch(error){
            console.log(error);
            return false;
        }
    }
}