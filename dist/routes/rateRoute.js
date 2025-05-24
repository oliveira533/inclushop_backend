"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateRoute = void 0;
const express_1 = __importDefault(require("express"));
const rateController_1 = require("../controllers/rateController");
exports.rateRoute = express_1.default.Router();
const constroller = new rateController_1.RateController();
exports.rateRoute.use((req, res, next) => {
    next();
});
exports.rateRoute.post("/new/rate", (req, res, next) => {
    constroller.sendRate(req, res, next);
});
exports.rateRoute.get("/shopping/rate/:shopping", (req, res, next) => {
    constroller.getShoppingRate(req, res, next);
});
exports.rateRoute.get("/shopping/rates/", (req, res, next) => {
    constroller.listAllRate(req, res, next);
});
