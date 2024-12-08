// Immediately Invoked Function Expressions (IIFE)

// Basic IIFE
(function () {
    console.log("Hello from IIFE!");
})();

// IIFE with Parameters
(function (name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
})("Zohaib", 22);

// IIFE with Arrow Function
(() => {
    console.log("Arrow Function IIFE!");
})();

// Returning a Value from IIFE
const result = (function () {
    const num1 = 10;
    const num2 = 20;
    return num1 + num2;
})();
console.log(`Result: ${result}`);

// IIFE for Private Scope
(function () {
    const privateVar = "I am private";
    console.log(privateVar);
})();

// console.log(privateVar); // Error: privateVar is not defined


