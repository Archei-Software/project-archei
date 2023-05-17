"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.loginService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../models/User");
const loginService = (email) => User_1.default.findOne({ email: email });
exports.loginService = loginService;
const generateToken = (id) => {
    const secret = process.env.SECRET_JWT || '';
    if (!secret) {
        throw new Error('JWT secret is not defined');
    }
    return jsonwebtoken_1.default.sign({ id: id }, secret, { expiresIn: 86400 });
};
exports.generateToken = generateToken;
