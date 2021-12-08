require("dotenv").config();
import express from "express";
import cors from "cors";
import { mainRouter } from "./routers/index"

const app = express();

app.use(express.json());
app.use(cors());
app.use(mainRouter);

export default app;