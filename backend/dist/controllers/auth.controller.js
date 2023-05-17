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
exports.login = void 0;
const bcrypt_1 = require("bcrypt");
const auth_service_1 = require("../services/auth.service");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield (0, auth_service_1.loginService)(email);
        if (!user) {
            res.status(404).send({ message: "Email or Password not found" });
            return;
        }
        const passwordIsValid = bcrypt_1.default.compareSync(password, user.password);
        if (!passwordIsValid) {
            res.status(400).send({ message: "Password not found" });
            return;
        }
        const token = (0, auth_service_1.generateToken)(user.id);
        res.json({
            message: "Login realizado com sucesso.",
            token,
            id: user.id,
            username: user.username,
            email: user.email,
        });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        }
        else {
            res.status(500).send("An error occurred.");
        }
    }
});
exports.login = login;
