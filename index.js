const employee = {
    name: "Watson",
    address: "28 Sherlock drive, New York, Ny, 10004"

}
console.log(employee.name);
console.log(employee.address);

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmp = {...employee };

    newEmp[key] = value;

    return newEmp
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
   
    const newEmp = {...employee };
    delete newEmp[key];
    //not sure why this works

   return newEmp;

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];
    
    return employee;

}

