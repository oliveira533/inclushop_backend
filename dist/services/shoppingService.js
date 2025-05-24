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
exports.ShoppingService = void 0;
const shoppingRepository_1 = require("../dal/repositories/shoppingRepository");
class ShoppingService {
    constructor(respository = new shoppingRepository_1.ShoppingRepository()) {
        this.db = respository;
    }
    createShopping(shoppingData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Chegou no service");
                const dbResponse = yield this.db.createShopping(shoppingData);
                if (dbResponse != true) {
                    return false;
                }
                return true;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.ShoppingService = ShoppingService;
