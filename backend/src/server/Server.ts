import express from 'express';
import connectDatabase from "../database/db"
import dotenv from "dotenv"

import authRoute from "../routes/auth.routes"

import cors from 'cors';
const server = express();
server.use(express.json());

dotenv.config();
connectDatabase();
server.use("/auth", authRoute)
server.use(cors({
    origin: '*'
  }));
export { server };
