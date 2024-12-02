const name = "Zohaib";
const repoCount = 30;

// Template literal example
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// String as an object
const gameName = new String('zohaib-za-com');

// Accessing characters
console.log(gameName[0]);

// Prototypes
console.log(gameName.__proto__);

// String properties and methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

// Substring and slice
const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-5, 4); // Note: Doesn't give expected results due to slicing rules
console.log(anotherString);

// Trimming spaces
const newStringOne = "   zohaib    ";
console.log(newStringOne);
console.log(newStringOne.trim());

// Replace and includes
const url = "https://zohaib.com/zohaib%20akhtar";
console.log(url.replace('%20', '-'));
console.log(url.includes('shaikh'));
console.log(url.includes('zohaib'));

// Split
console.log(gameName.split('-'));

// Additional String Methods and Concepts

// StartsWith and EndsWith
console.log(gameName.startsWith('zo')); // true
console.log(gameName.endsWith('com')); // true

// Repeat
console.log(name.repeat(3)); // ZohaibZohaibZohaib

// PadStart and PadEnd
console.log(name.padStart(10, '*')); // ***Zohaib
console.log(name.padEnd(10, '*'));   // Zohaib***

// Search with regex
console.log(gameName.search(/za/)); // Position of 'za'

// Match with regex
console.log(gameName.match(/z[a-z]/g)); // Matches 'zo', 'za'

// Replace with regex
console.log(gameName.replace(/za/g, 'xy')); // 'zohaib-xy-com'

// Split with limit
console.log(gameName.split('-', 2)); // ['zohaib', 'za']

// String concatenation
const fullName = name.concat(' Akhtar');
console.log(fullName); // Zohaib Akhtar

// Checking for empty or blank strings
const emptyString = '';
console.log(emptyString === ''); // true
console.log(emptyString.length === 0); // true

// String to array and back
const charArray = name.split(''); // ['Z', 'o', 'h', 'a', 'i', 'b']
console.log(charArray);
console.log(charArray.join('')); // 'Zohaib'

// Normalize (Unicode normalization)
const accentedString = '\u00E9'; // é
console.log(accentedString.normalize('NFD')); // e + ́ (split into base and accent)

// Escape special characters
const specialChars = 'This is a "quote"';
console.log(specialChars.replace(/"/g, '\\"')); // Escapes double quotes
