import { Request, Response } from "express";
import { Employee } from "../entities/Employee";
import { BaseResponse } from "../models";
import employeeService from "../services/employee.service";

async function GetAll(req: Request, res: Response) {
    const employees = await employeeService.GetAll();

    const response: BaseResponse<Employee[]> = {
        message: "Success",
        data: employees,
    };

    res.status(200).json(response);
}

async function Create(req: Request, res: Response) {
    const employee: Employee = req.body;

    await employeeService.Create(employee)
        .then(newEmployee => {
            const response: BaseResponse<Employee> = {
                message: "Success",
                data: newEmployee,
            }

            res.status(201).json(response);
            return;
        })
        .catch(error => {
            if (error.code && error.code == 11000) {
                const field = Object.keys(error.keyValue);

                const response: BaseResponse<Employee> = {
                    message: "error",
                    error: `A user with that ${field} already exists.`
                }

                res.status(409).json(response);

                return;
            }

            const response: BaseResponse<Employee> = {
                message: "error",
                error: JSON.stringify(error).toString(),
            }

            res.status(500).json(response);
        });
}

export {
    GetAll,
    Create,
}