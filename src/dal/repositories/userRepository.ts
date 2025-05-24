import { FirebaseDatabase } from "../firebase";
import { userType } from "../../type/userType";
import { where } from "firebase/firestore";

export class UserRepository{
    readonly db : FirebaseDatabase<userType>

    constructor(firebase: FirebaseDatabase<userType> = new FirebaseDatabase<userType>("users")) {
        this.db = firebase;
    }

    async createUser(userData: userType): Promise<boolean> {
        try {
            const document = await this.db.create(userData);
            if(!document){
                return false;
            }
            return true;
        } catch (error) {
            throw error
        }
    }

    async validateUser(document: string): Promise<userType | null>{
        try{
            const query: userType[] = await this.findByDocumment(document);
            return query[0] || null;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async findByDocumment(documment: string): Promise<userType[]> {
        try {
            const users = await this.db.query([
                where("documment", "==", documment)
            ]);
            return users;
        } catch (error) {
            console.error("Error finding user by documment:", error);
            throw error;
        }
    }

    async findUsersByRoleAndStatus(role: string, isActive: boolean): Promise<userType[]> {
        try {
            const users = await this.db.query([
                where("role", "==", role),
                where("isActive", "==", isActive)
            ]);
            return users;
        } catch (error) {
            console.error("Error finding users by role and status:", error);
            throw error;
        }
    }
}