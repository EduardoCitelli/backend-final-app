import { EmployeeRoutes } from "./routes";
import { validateBody, validateParameter } from "../middlewares";
import { employeeValidation, employeeIdValidation } from "../schemas";
import { employeeController } from "../controllers";
import e, { Router } from 'express'

export const employeeRouter = Router();

employeeRouter.get(
    EmployeeRoutes.Get,
    employeeController.GetAll
);

employeeRouter.get(
    EmployeeRoutes.GetById,
    validateParameter(employeeIdValidation),
    employeeController.GetOne
);

employeeRouter.post(
    EmployeeRoutes.Create,
    validateBody(employeeValidation),
    employeeController.Create
);

employeeRouter.delete(
    EmployeeRoutes.Delete,
    validateParameter(employeeIdValidation),
    employeeController.Delete
)