import cors from 'cors';
import express from 'express';
import dotenv from "dotenv"

import connectDatabase from "../src/database/db"
import authRoute from "../src/routes/auth.routes"

const server = express();
server.use(express.json());

dotenv.config();
connectDatabase();
server.use("/auth", authRoute)

server.use(cors({
    origin: '*'
  }));

server.listen(3000, () => console.log('Server is running port 3000'));