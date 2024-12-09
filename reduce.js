// REDUCE
//  Calculate the sum of all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum); // 21

// Combined Example: Filter odd numbers, double them, and find their sum
const oddSum = numbers
    .filter((num) => num % 2 !== 0) // [1, 3, 5]
    .map((num) => num * 2)         // [2, 6, 10]
    .reduce((acc, num) => acc + num, 0); // 18

console.log("Sum of Doubled Odd Numbers:", oddSum); // 18

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
