// Object singleton

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "zohaib@gmail.com",
    fullname: {
        userfullname: {
            firstname: "zohaib",
            lastname: "akhtar"
        }
    }
}

// console.log(regularUser.email);
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);


// we can combine abject also like arrays
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 }  // we can combine objects like arrays using spread operator
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "z@gmail.com"
    },
    {
        id: 1,
        email: "z@gmail.com"
    },
    {
        id: 1,
        email: "z@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//  Object Destructuring and JSON API
const course = {
    coursename: "Full Stack Development",
    courseInstructor: "Hitesh Choudhary",
    platform: "Udemy",
    price: "499"
}

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//     "coursename": "Learn JS"
//     "courseInstructor": "Hitesh Choudhary",
//     "platform": "Youtube",
//     "price": "499"
// }

[
    {},
    {},
    {}
]