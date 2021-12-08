import express from 'express'

import { MainRoutes } from "./routes";
import { getRoot } from "./../controllers/index";

const mainRouter = express.Router();

mainRouter.get(MainRoutes.Main, getRoot);

export {
    mainRouter,
};