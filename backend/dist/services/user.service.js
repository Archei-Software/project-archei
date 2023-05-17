"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const createService = (body) => User_1.default.create(body);
const findAllService = () => User_1.default.find();
const findByIdService = (id) => User_1.default.findById(id);
const updateService = (id, username, password, level, email, phone, avatar) => User_1.default.findOneAndUpdate({ _id: id }, { username, password, level, email, phone, avatar });
const deleteService = (id) => User_1.default.findOneAndDelete({ _id: id });
exports.default = {
    createService,
    findAllService,
    findByIdService,
    updateService,
    deleteService,
};
