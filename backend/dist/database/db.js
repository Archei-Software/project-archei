"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectDatabase = () => {
    console.log("Wait connecting to the database...");
    mongoose_1.default
        .connect(process.env.MONGODB_URI, {})
        .then(() => console.log("MongoDB Atlas Connected!"))
        .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`));
};
exports.default = connectDatabase;
