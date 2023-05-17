"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = require("express");
const db_1 = require("../database/db");
const dotenv_1 = require("dotenv");
const auth_routes_1 = require("../routes/auth.routes");
const cors_1 = require("cors");
const server = (0, express_1.default)();
exports.server = server;
server.use(express_1.default.json());
dotenv_1.default.config();
(0, db_1.default)();
server.use("/auth", auth_routes_1.default);
server.use((0, cors_1.default)({
    origin: '*'
}));
