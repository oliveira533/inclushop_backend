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
exports.ShoppingRepository = void 0;
const firebase_1 = require("../firebase");
class ShoppingRepository {
    constructor(firebase = new firebase_1.FirebaseDatabase("shoppings")) {
        this.db = firebase;
    }
    createShopping(shoppingData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Chegou no repository");
                const document = yield this.db.create(shoppingData);
                if (!document) {
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
exports.ShoppingRepository = ShoppingRepository;
