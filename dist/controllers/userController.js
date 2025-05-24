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
exports.UserControler = void 0;
const userService_1 = require("../services/userService");
class UserControler {
    constructor(service = new userService_1.UserService()) {
        this.service = service;
    }
    createNewUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                yield this.service.createNewUser(body);
                return res.status(201).send({ message: "usuário criado com sucesso" });
            }
            catch (err) {
                console.log(err);
                res.status(500).send({ error: err });
            }
        });
    }
    validateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const response = yield this.service.loginUser(body);
                if (response == true) {
                    return res.status(201).send({ message: "usuário validado" });
                }
                res.status(401).send({ error: "usuário não validado" });
            }
            catch (err) {
                console.log(err);
                res.status(500).send({ error: err });
            }
        });
    }
}
exports.UserControler = UserControler;
