// Traditional Function
// function add(a, b) {
//     return a + b;
// }

// Arrow Function
// const add = (a, b) => a + b;

// Traditional Function
// function greet(name) {
// return `Hello, ${name}!`;
// }

// Arrow Function
// const greet = name => `Hello, ${name}!`;

// console.log(greet("Amit")); // Output: Hello, Amit!


const user = {
    username: "zohaib",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "akhtar"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "zohaib"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "zohaib"
//     console.log(this.username);
// }

const chai = () => {
    let username = "zohaib"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "zohaib" })

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()