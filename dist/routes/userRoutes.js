"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
exports.userRouter = express_1.default.Router();
const controller = new userController_1.UserControler();
exports.userRouter.use((req, res, next) => {
    next();
});
exports.userRouter.post("/new/user", (req, res, next) => {
    controller.createNewUser(req, res, next);
});
exports.userRouter.post("/validate/user", (req, res, next) => {
    controller.validateUser(req, res, next);
});
