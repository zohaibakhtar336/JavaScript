function sayMyName() {
    console.log("Z");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("I");
    console.log("B");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,4);

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "Akhtar") {
    if (!username) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("zohaib"))


// function calculateCartPrice(...num1) { // output: [200, 400, 500, 2000]
function calculateCartPrice(val1, val2, ...num1) {  // output: val1=200, val2=400 and num1=[500, 2000]
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const student = {
    coursename: "Full Stack Development",
    courseInstructor: "Hitesh",
    platform: "Udemy",
    price: 499
}

function handleObject(anyobject) {
    console.log(`The price of course is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "shaikh",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));