// Truthy Values
console.log(Boolean(true));            // true (literal true)
console.log(Boolean(1));               // true (non-zero number)
console.log(Boolean(-1));              // true (negative number)
console.log(Boolean("hello"));         // true (non-empty string)
console.log(Boolean([]));              // true (empty array)
console.log(Boolean({}));              // true (empty object)
console.log(Boolean(Infinity));        // true (positive infinity)
console.log(Boolean(-Infinity));       // true (negative infinity)


// Falsy Values
console.log(Boolean(false));       // false (literal false)
console.log(Boolean(0));           // false (the number 0)
console.log(Boolean(-0));          // false (negative 0)
console.log(Boolean(""));          // false (empty string)
console.log(Boolean(null));        // false (null)
console.log(Boolean(undefined));   // false (undefined)
console.log(Boolean(NaN));         // false (Not a Number)
