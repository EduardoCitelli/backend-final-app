interface Employee {
    id?: number,
    name: string,
    surname: string,
    phone: string,
    email: string,
    area: EmployeeArea,
}

enum EmployeeArea {
    RRHH = 1,
    ACCOUNTING,
    MARKETING
}

export {
    Employee,
    EmployeeArea
}