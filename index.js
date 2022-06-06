const employee = {
    name: 'Abdo',
    streetAdress: 'Istanbul/Turkey'
 }

const updateEmployeeWithKeyAndValue = (employeeObj, key, value) => {
    const employeeObjInt = {...employeeObj};
    employeeObjInt[key] = value;
    return employeeObjInt;
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employeeObj, key, value) => {
    employeeObj[key] = value;
    console.log(employee);
    return employee;
}
const deleteFromEmployeeByKey = (employeeObj, key) => {
    const employeeObjInt = {...employeeObj};
    delete employeeObjInt[key];
    return employeeObjInt;
 }
 const destructivelyDeleteFromEmployeeByKey = (employeeObj, key) => {
    delete employeeObj[key];
    return employeeObj;
 } 