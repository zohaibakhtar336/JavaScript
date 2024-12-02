// Basic Number Operations
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// String representation of a number
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// Precision of numbers
const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

// Formatting numbers for a locale
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++ Maths ++++++++++++++++++++++++++++++

// Basic Math object methods
// console.log(Math);
// console.log(Math.abs(-4));       // Absolute value 4
// console.log(Math.round(4.6));   // Round to nearest integer
// console.log(Math.ceil(4.2));    // Round up
// console.log(Math.floor(4.9));   // Round down
// console.log(Math.min(4, 3, 6, 8)); // Minimum value 4
// console.log(Math.max(4, 3, 6, 8)); // Maximum value 8

// Generating random numbers
// console.log(Math.random());                      // Random number between 0 to 1
// console.log((Math.random() * 10) + 1);           // Random number between 1 to 11
// console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 to 10

// Random number in a range
const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// ++++++++++++++++ Advanced Math ++++++++++++++++++++++++++++++

// Power and square root
console.log(Math.pow(2, 3));    // 2 raised to the power 3 (8)
console.log(Math.sqrt(16));     // Square root of 16 (4)

// Trigonometric functions
console.log(Math.sin(Math.PI / 2)); // Sine of 90 degrees (1)
console.log(Math.cos(0));           // Cosine of 0 degrees (1)

// Logarithmic functions
console.log(Math.log(1));       // Natural logarithm of 1 (0)
console.log(Math.log10(100));   // Base-10 logarithm of 100 (2)

// Rounding numbers to specific decimals
function roundToDecimals(num, decimals) {
    return Number(num.toFixed(decimals));
}
console.log(roundToDecimals(3.14159, 2)); // 3.14

// Parsing numbers from strings
const strNumber = "123.45abc";
console.log(parseInt(strNumber)); // 123
console.log(parseFloat(strNumber)); // 123.45

// Checking if a value is finite or NaN
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isNaN(NaN)); // true

// Handling large numbers
const largeNumber = 9007199254740991n; // BigInt
console.log(largeNumber + 1n); // 9007199254740992n

// Using exponential notation
const expNumber = 5e3; // 5 * 10^3
console.log(expNumber); // 5000
