import { model } from 'mongoose'
import { Employee } from '../../entities/Employee.js';
import { employeeModel } from './employee'

const EmployeeSchema = model<Employee>("Employee", employeeModel);

export {
    EmployeeSchema,
}