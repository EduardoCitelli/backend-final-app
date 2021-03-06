import { Employee } from '../entities/Employee';
import { EmplooyeeRepostory } from './../repositories/index';

async function GetAll(): Promise<Employee[]> {
    const employees = await EmplooyeeRepostory.findAll();

    return employees;
}

async function GetOne(id: string): Promise<Employee> {
    const employee = await EmplooyeeRepostory.findById(id);

    return employee as Employee;
}

async function Create(employee: Employee): Promise<Employee> {
    const entity = await EmplooyeeRepostory.save(employee);

    return entity;
}

async function Update(id: string, data: Employee): Promise<any> {
    const employee = await EmplooyeeRepostory.update(id, data);

    return employee;
}

async function Delete(id: string): Promise<Employee> {
    const employee = await EmplooyeeRepostory.delete(id);

    return employee as Employee;
};

export default {
    GetAll,
    GetOne,
    Create,
    Update,
    Delete,
}