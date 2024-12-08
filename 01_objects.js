// singleton
// Object.create // constructor method

// object literals
//  Object values will always access by dot (.) notation

const mySym = Symbol("key1")

const JsUser = {
    name: "Zohaib",
    "full name": "Zohaib  Akhtar",
    [mySym]: "mykey1",
    age: 22,
    location: "Bangelore",
    email: "zohaib@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "zohaib@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "zohaib@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());