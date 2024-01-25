// Add "make a grocery list" (.push)/(.unshift)

// Change "have lunch" with "meet Bob for lunch". Be sure to keep the order of the array. (.splice)

// remove "organize desk" as if "completed", shortening the task list. (function removeMango(fruit) {
//    return fruit !== 'mango'
//})

// Add three more tasks that need to be done before lunch. ("sweep porch", "send email to Jane", "read article"). Order doesn't matter. (.unshift)

// Remove "make grocery list" as that won't be needed to be done until tomorrow. (.pop)/(.shift)

// Console log the value of how many items are in the tasks array.

let tasks = [
    'organize desk', 'have lunch', 'balance budget', 'read'
];

tasks.push("make a grocery list");

tasks.splice(1,1,"meet bob for lunch")

tasks.shift(0);

tasks.unshift("sweep porch", "send e-mail to Jane", "read article")

tasks.pop();
console.log(tasks.length);