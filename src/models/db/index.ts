import { model } from 'mongoose'
import { employeeModel } from './employee.js'

const Employee = model("Employee", employeeModel);

export {
    Employee,
}