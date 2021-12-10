import { model } from 'mongoose'
import { employeeModel } from './employee.js'

const EmployeeSchema = model("Employee", employeeModel);

export {
    EmployeeSchema,
}