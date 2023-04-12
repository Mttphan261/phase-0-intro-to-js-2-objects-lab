// Write your solution in this file!
const employee = {
    name: 'Matt Phan',
    streetAddress: '123 Main St',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee}
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee}
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}













































// const employee = {
//     name: "Matthew",
//     streetAddress: "1234 Sesame St",
// };

// function updateEmployeeWithKeyAndValue(obj, key, value) {
//     return {
//         ...obj,
//         [key]: value,
//     };
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
//     obj[key] = value; 

//     return obj;
//     };

// function deleteFromEmployeeByKey(obj, key, value) {
//     const newObj = { ...obj};
//     newObj[key] = value;
//     return newObj;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//    delete employee[key]
//    return employee;
// }