require("dotenv").config();
require("./connections/mongoose");

import express from "express";
import cors from "cors";
import { mainRouter, employeeRouter } from "./routers/index"

const app = express();

app.use(express.json());
app.use(cors());
app.use(mainRouter, employeeRouter);

export default app;