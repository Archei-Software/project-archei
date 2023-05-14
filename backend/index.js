import express from "express";
import connectDatabase from "./database/db.js"
import dotenv from "dotenv"

import authRoute from "./routes/auth.routes.js"

import cors from 'cors';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
  origin: '*'
}));
connectDatabase();
//ROTAS
app.use(express.json())

app.use("/auth", authRoute)

app.listen(3000, () => console.log(`Server running on port ${port}`));