import { EmployeeRoutes } from "./routes";
import { validateBody, validateParameter } from "../middlewares";
import { employeeValidation, employeeIdValidation } from "../schemas";
import { employeeController } from "../controllers";
import { Router } from 'express'

export const employeeRouter = Router();

employeeRouter.get(
    EmployeeRoutes.Get,
    employeeController.GetAll
);

employeeRouter.post(
    EmployeeRoutes.Create,
    validateBody(employeeValidation),
    employeeController.Create
);