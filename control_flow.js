// CONDITIONAL STATEMENTS

// 1. if statement: Executes code if condition is true.
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote."); // Output: You are eligible to vote.
}

// 2. if-else statement: Executes one block if true, another if false.
let temperature = 30;
if (temperature > 25) {
    console.log("It's warm outside."); // Output: It's warm outside.
} else {
    console.log("It's cool outside.");
}

// 3. if-else if ladder: Multiple conditions.
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A"); // Output: Grade: A
} else {
    console.log("Grade: B");
}

// 4. switch statement: Checks specific values for a variable.
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Output: Wednesday
        break;
    default:
        console.log("Invalid day");
}

// LOOPING STATEMENTS

// 1. for loop: Executes block repeatedly for a known number of iterations.
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i); // Output: Iteration: 1, Iteration: 2, ...
}

// 2. while loop: Executes as long as condition is true.
let counter = 1;
while (counter <= 5) {
    console.log("Counter:", counter); // Output: Counter: 1, Counter: 2, ...
    counter++;
}

// 3. do-while loop: Executes at least once, then checks condition.
let number = 1;
do {
    console.log("Number:", number); // Output: Number: 1, Number: 2, ...
    number++;
} while (number <= 3);

// 4. for...of loop: Iterates over iterable objects like arrays or strings.
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit); // Output: Fruit: Apple, Fruit: Banana, ...
}

// 5. for...in loop: Iterates over object keys.
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: John, age: 30, ...
}

// JUMP STATEMENTS

// 1. break: Exits the loop immediately.
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i); // Output: 1, 2
}

// 2. continue: Skips the current iteration.
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i); // Output: 1, 2, 4, 5
}

// 3. return: Exits the function and optionally returns a value.
function add(a, b) {
    if (b === 0) return "Division by zero not allowed.";
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// EXCEPTION HANDLING

// 1. try-catch: Catches errors to prevent application crashes.
try {
    let result = 10 / 0; // Division by zero.
    console.log(result); // Output: Infinity
} catch (error) {
    console.log("An error occurred:", error.message);
}

// 2. throw: Manually throw an error.
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}
try {
    console.log(divide(10, 0)); // Throws error
} catch (error) {
    console.log("Error:", error.message); // Output: Error: Cannot divide by zero
}

// 3. finally: Executes regardless of try/catch outcome.
try {
    console.log("Processing...");
} finally {
    console.log("Cleanup completed."); // Output: Cleanup completed.
}
