"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shoppingRoute = void 0;
const express_1 = __importDefault(require("express"));
const shoppingController_1 = require("../controllers/shoppingController");
exports.shoppingRoute = express_1.default.Router();
const controller = new shoppingController_1.ShoppingController();
exports.shoppingRoute.use((req, res, next) => {
    next();
});
exports.shoppingRoute.post("/new/shopping", (req, res, next) => {
    controller.createShopping(req, res, next);
});
