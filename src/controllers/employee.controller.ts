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

async function GetOne(req: Request, res: Response) {
    const { id } = req.params;

    const employee: Employee = await employeeService.GetOne(id);

    if (!employee) {
        const response: BaseResponse<Employee> = {
            message: "Not found",
            error: "User not found",
        }

        res.status(404).send(response);
        return;
    }

    const response: BaseResponse<Employee> = {
        message: "Success",
        data: employee,
    }

    res.status(200).send(response);
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
                    error: `A employee with that ${field} already exists.`
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

async function Update(req: Request, res: Response) {
    const { id } = req.params;
    const employee: Employee = req.body;

    await employeeService.Update(id, employee)
        .then(updatedEmployee => {
            if (!updatedEmployee) {
                const response: BaseResponse<Employee> = {
                    message: "Not Found",
                    error: "Employee not found"
                }

                res.status(404).send(response);
                return;
            }

            const response: BaseResponse<Employee> = {
                message: "Success",
                data: updatedEmployee,
            }

            res.status(200).send(response);
        })
        .catch(error => {
            if (error.code && error.code == 11000) {
                const field = Object.keys(error.keyValue);

                const response: BaseResponse<Employee> = {
                    message: "error",
                    error: `A employee with that ${field} already exists.`
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

async function Delete(req: Request, res: Response) {
    const { id } = req.params;

    const employee = await employeeService.Delete(id);

    if (!employee) {
        const response: BaseResponse<Employee> = {
            message: "Not found",
            error: "Employee not found"
        }

        res.status(404).send(response);
        return;
    }

    const response: BaseResponse<Employee> = {
        message: "Success",
        data: employee,
    }

    res.status(200).send(response);
}

export {
    GetAll,
    GetOne,
    Create,
    Update,
    Delete,
}