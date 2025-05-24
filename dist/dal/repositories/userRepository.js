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
exports.UserRepository = void 0;
const firebase_1 = require("../firebase");
const firestore_1 = require("firebase/firestore");
class UserRepository {
    constructor(firebase = new firebase_1.FirebaseDatabase("users")) {
        this.db = firebase;
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const document = yield this.db.create(userData);
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
    validateUser(document) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield this.findByDocumment(document);
                return query[0] || null;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    findByDocumment(documment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.db.query([
                    (0, firestore_1.where)("documment", "==", documment)
                ]);
                return users;
            }
            catch (error) {
                console.error("Error finding user by documment:", error);
                throw error;
            }
        });
    }
    findUsersByRoleAndStatus(role, isActive) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.db.query([
                    (0, firestore_1.where)("role", "==", role),
                    (0, firestore_1.where)("isActive", "==", isActive)
                ]);
                return users;
            }
            catch (error) {
                console.error("Error finding users by role and status:", error);
                throw error;
            }
        });
    }
}
exports.UserRepository = UserRepository;
