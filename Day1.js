// 1. Create a variable using const and store your college name. Print it. 
const college = "Geeta University";
console.log(college);


// 2. Create a variable using let and update its value three times
let a = 3;
 a = 5;
 a = 6;
 a = 7;
console.log(a);


// 3. Create a block using {} and show that a variable declared with let cannot be accessed outside it. 
{
    let age = 20;
    console.log(age); // Accessible inside the block
}
// console.log(age); // Error: age is not defined


// 4. Write a program to swap two numbers using array destructuring. 
let c = 1 , d = 5;
[c,d] = [d,c];
console.log(c);
console.log(d);


// 5. Create an arrow function that returns the cube of a number. 
const result = (num) => num * num * num;
console.log(result(3));


// 6. Create an arrow function to check whether a number is even or odd. 
const num = (p) =>{
   return p % 2 == 0 ? "Even" : "Odd";
}
console.log(num(19));


// 7. Create an arrow function that finds the maximum of three numbers.
const findMax = (n1,n2,n3) => {
    if(n1 > n2 && n1 > n3){ return n1;}
    else if(n2 > n1 && n2 > n3){ return n2; }
    else { return n3; }
}
console.log(findMax(1,2,6));


// 8. Given an array:  const nums = [10,20,30,40,50];
// Use destructuring to get first, second and remaining values.
const nums = [10,20,30,40,50];
const [q,r,s,t,u] = nums;
console.log(q);
console.log(r);
console.log(s);
console.log(t);
console.log(u);


// 9. Create a function that receives a user's name and age and returns: "Hello Ram, you are 25 years old." using template literals. 
const user = {
    name :"Ram",
    age:25
}
const greetUser = (name , age) =>{
return `Hello ${name} you are ${age} years old`;
}
console.log(greetUser(user.name, user.age));


// 10.  Generate the following URL dynamically: "/api/users/101" using template literals. 
const userId = 101;
const url = `/api/users/${userId}`;
console.log(url);


// 11. Create an object and destructure all properties: JavaScript const student = { name: "Ram", age: 25, course: "MERN" }; 
const student = {
    name: "Ram",
    age: 25,
    course: "MERN"
};
// Object destructuring
const { name, age, course } = student;
console.log(name);
console.log(age);
console.log(course);


// 12.  Rename course to technology while destructuring. 
const { course : technology } = student;
console.log(technology);
 

// 13. Create a function with a default parameter: createUser(name, role="Student")
function createUser (name , role="Student"){
    console.log(`My name is ${name} and My role is ${role}`);
}
createUser("Priya");
createUser("Priya" , "Teacher");


// 14. Create a calculator function where the operation defaults to "add".
const calculator = (a, b, operation = "add") => {
    if (operation === "add") {
        return a + b;
    }
    else if (operation === "subtract") {
        return a - b;
    }
    else if (operation === "multiply") {
        return a * b;
    }
    else if (operation === "divide") {
        return a / b;
    }
};
console.log(calculator(10, 5));            
console.log(calculator(10, 5, "multiply"));


// 15. Create a function that receives unlimited numbers and returns their sum using the Rest Operator. 
const findSum = (...numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
};
console.log(findSum(10, 20, 30));
console.log(findSum(1, 2, 3, 4, 5));


//16. Create a function that receives unlimited numbers and returns the largest number. 
const findLargest = (...numbers) => {
    return Math.max(...numbers);
};
console.log(findLargest(10, 20, 5, 40, 15));


// 17. Merge two arrays using the Spread Operator: 
// const frontend = ["HTML", "CSS"]; 
// const backend = ["Node", "Express"]; 
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];

const fullStack = [...frontend, ...backend];
console.log(fullStack);


// 18. Copy an array using the Spread Operator and add one extra value.
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);


// 19. Copy an object and update only the email property. 
const user1 = {
    name: "Priya",
    age: 25,
    email: "Priya@gmail.com"
};
const updatedUser = {
    ...user1,
    email: "Priya123@gmail.com"
};
console.log(updatedUser);


// 20. Create a product object and create a new object with an added discount field using the Spread Operator. 
const product = {
    name: "Laptop",
    price: 50000
};
const updatedProduct = {
    ...product,
    discount: 10
};
console.log(updatedProduct);


// 21. Use map() and an arrow function to return only names from the given array:
// const users = [ { name: "Ram", age: 25 }, 
                // { name: "Mohan", age: 30 }, 
                // { name: "Amit", age: 22 } ]; 

const users = [
    { name: "Priya", age: 20 },
    { name: "Nera", age: 21 },
    { name: "Sita", age: 22 }
];
const names = users.map(user => user.name);
console.log(names);


// 22. Use filter() to get users whose age is greater than 24. 
const users1 = [
    { name: "Priya", age: 20 },
    { name: "Nera", age: 21 },
    { name: "Sita", age: 22 }
];
const result1 = users1.filter(user => user.age > 19);
console.log(result1);


// 23. Use reduce() to calculate the total age of all users. 
const person = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];
const totalAge = person.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge);


// 24. Create a function createInvoice(customerName, amount) and return a formatted string using template literals. 
const createInvoice = (customerName, amount) => {
    return `Invoice for ${customerName}: Amount = ₹${amount}`;
};
console.log(createInvoice("Ram", 5000));


// 25. Mini Challenge :-
//  Given the student object:
//  const student = { name: "Ram", marks: [80, 90, 70, 85] }; 
// Using Destructuring, Arrow Functions, Rest/Spread, and Template Literals, calculate the total marks and average
// then print: None Student: Ram Total: 325 


const studentData = {
    name1: "Ram",
    marks: [80, 90, 70, 85]
};
// Destructuring
const { name1, marks } = studentData;
// Spread + Arrow Function + Reduce
const totalMarks = [...marks].reduce((sum, mark) => sum + mark, 0);
// Average
const averageMarks = totalMarks / marks.length;
// Template Literals
console.log(`Student: ${name1}`);
console.log(`Total: ${totalMarks}`);
console.log(`Average: ${averageMarks}`);