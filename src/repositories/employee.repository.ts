import { UpdateQuery } from 'mongoose';
import { Employee } from '../entities/Employee'
import { EmployeeSchema } from '../models/db/index'

type EmployeeWithoutId = Omit<Employee, "id">;

export const EmplooyeeRepostory = {
    save: (employee: EmployeeWithoutId) => {
        return EmployeeSchema.create({
            ...employee
        });
    },
    findAll: () => {
        return EmployeeSchema.find();
    },
    findById: (id: string) => {
        return EmployeeSchema.findById(id);
    },
    update: (id: string, employee: EmployeeWithoutId) => {
        return EmployeeSchema.findByIdAndUpdate(id, employee as UpdateQuery<Employee>, { new: true });
    },
    delete: (id: string) => {
        return EmployeeSchema.findByIdAndDelete(id);
    },
}