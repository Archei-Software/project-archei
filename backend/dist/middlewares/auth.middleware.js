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
exports.authMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const user_service_1 = require("../services/user.service");
const dotenv_1 = require("dotenv");
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.sendStatus(401);
        }
        const parts = authorization.split(" ");
        if (parts.length !== 2) {
            return res.sendStatus(401);
        }
        const [schema, token] = parts;
        if (schema !== "Bearer") {
            return res.sendStatus(401);
        }
        const secret = process.env.SECRET_JWT || ""; // Forneça um valor padrão ou altere o tipo para o tipo de segredo apropriado
        if (!secret) {
            return res.status(500).send({ message: "JWT secret is not defined" });
        }
        jsonwebtoken_1.default.verify(token, secret, (error, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            if (error) {
                return res.status(401).send({ message: "Token invalid!" });
            }
            if (!decoded || typeof decoded !== "object" || !decoded.id) {
                return res.status(401).send({ message: "Invalid token!" });
            }
            const user = yield user_service_1.default.findByIdService(decoded.id);
            if (!user || !user.id) {
                return res.status(401).send({ message: "Invalid token!" });
            }
            req.userId = user.id;
            return next();
        }));
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
exports.authMiddleware = authMiddleware;
