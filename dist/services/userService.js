"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userRepository_1 = require("../dal/repositories/userRepository");
class UserService {
    constructor(respository = new userRepository_1.UserRepository()) {
        this.db = respository;
    }
    createNewUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbResponse = yield this.db.createUser(userData);
                if (dbResponse == false) {
                    return false;
                }
                return true;
            }
            catch (error) {
                throw error;
            }
        });
    }
    loginUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.db.validateUser(userData.documment);
                if (!user) {
                    return false;
                }
                return user.password === userData.password;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
}
exports.UserService = UserService;
