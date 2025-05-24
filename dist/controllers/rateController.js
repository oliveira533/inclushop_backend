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
exports.RateController = void 0;
const ratingSerivce_1 = require("../services/ratingSerivce");
class RateController {
    constructor(service = new ratingSerivce_1.RateService()) {
        this.service = service;
    }
    sendRate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const response = yield this.service.sendNewRating(body);
                if (response == false) {
                    res.status(500).send({ error: "Avaliação não foi salva" });
                }
                res.status(200).send({ mensagem: "Avaliação criada" });
            }
            catch (err) {
                console.log(err);
                res.status(500).send({ error: err });
            }
        });
    }
    getShoppingRate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.params.shopping;
                const response = yield this.service.getShoppingRates(body);
                res.status(200).send(response);
            }
            catch (err) {
                console.log(err);
                res.status(500).send({ error: err });
            }
        });
    }
    listAllRate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.service.listAllRate();
                res.status(200).send(response);
            }
            catch (err) {
                console.log(err);
                res.status(500).send({ error: err });
            }
        });
    }
}
exports.RateController = RateController;
