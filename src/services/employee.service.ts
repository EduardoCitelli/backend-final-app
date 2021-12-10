import { Employee } from '../entities/Employee';
import { EmplooyeeRepostory } from './../repositories/index';

async function GetAll(): Promise<Employee[]> {
    const employees = await EmplooyeeRepostory.findAll();

    return employees;
}

async function GetOne(id: string): Promise<Employee> {
    const employee = await EmplooyeeRepostory.findById(id);

    return employee;
}

async function Create(employee: Employee): Promise<Employee> {
    const entity = await EmplooyeeRepostory.save(employee);

    const response: Employee = {
        id: entity._id.toString(),
        ...entity._doc,
    };

    return response;
}

async function Update(id: string, data: Employee): Promise<any> {
    const employee = await EmplooyeeRepostory.update(id, data);

    return employee;
}

async function Delete(id: string): Promise<Employee> {
    const employee = await EmplooyeeRepostory.delete(id);

    return employee;
};

export default {
    GetAll,
    GetOne,
    Create,
    Update,
    Delete,
}