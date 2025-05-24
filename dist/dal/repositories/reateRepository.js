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
exports.RateRepository = void 0;
const firebase_1 = require("../firebase");
const firestore_1 = require("firebase/firestore");
class RateRepository {
    constructor(firebase = new firebase_1.FirebaseDatabase("rating")) {
        this.db = firebase;
    }
    sendRate(rating) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const document = yield this.db.create(rating);
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
    listAllRates() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const documents = yield this.db.readAll();
                if (!documents) {
                    return null;
                }
                return documents;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getShoppingRates(shopping) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const documents = yield this.db.query([(0, firestore_1.where)("shopping", "==", shopping)]);
                if (!documents) {
                    return [];
                }
                return documents;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.RateRepository = RateRepository;
