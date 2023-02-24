// Write your solution in this file!
const employee = {
    name: "Matthew",
    streetAddress: "1234 Sesame St",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 

    return obj;
    };

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key]
   return employee;
}