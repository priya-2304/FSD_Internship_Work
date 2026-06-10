// Section A :- Scope & Lexical Scope

// 1.  Predict output
let a = 10; 
function outer() {  
      let a = 20;    
       function inner() {        console.log(a);  
         }    
        inner(); 
    }  
    outer(); 
// Output :- 20


// 2. Predict Output
let count = 1;
function test() {
    console.log(count);
    let count = 2;
}
test();
// Output :-  Reference Error


// 3. Create a nested function structure of 4 levels and print variables from all parent scopes. 
function level1() {
    let a = 1;
    function level2() {
        let b = 2;
        function level3() {
            let c = 3;
            function level4() {
                let d = 4;
                console.log(a);
                console.log(b);
                console.log(c);
                console.log(d);
            }
       level4();
        }
   level3();
    }
   level2();
}
level1();


// 4. Write a function that returns another function and demonstrates lexical scope.  
function outer() {
    let message = "Hello";
   return function() {
        console.log(message);
    };
}
const fun = outer();
fun();


// 5. Predict Output
var x = 100;  
function a() {     
    console.log(x);    
     var x = 50; 
}  a(); 
// Output :- undefined


// 6. Create a function where a child function can access grandparent variables.   
function grandParent() {
    let money = 5000;
    function parent() {
        function child() {
            console.log(money);
        }
        child();
    }
    parent();
}
grandParent();


// 7. Predict Output 
let name = "Ram";
function show() {
    let name = "Mohan";
    return function() {       console.log(name);
    };
}
show()();
// Output :- Mohan


// 8. Create a 3-level nested function and access all variables inside the innermost function.   
function one() {
    let a = 10;
    function two() {
        let b = 20;
        function three() {
            let c = 30;
       console.log(a, b, c);
        }
   three();
    }
   two();
}
one();


// 9. Can a parent access a child variable?  Demonstrate using code.
// Answer :- Parent cannot access child variable.
// Code :-
function parent() {
    function child() {
        let x = 100;
    }
    child();
    console.log(x);
}
parent();
// Output :- output would be ReferenceError



// 10. Create a private variable using lexical scope.
function counter() {
    let count = 0;
    return {
        increment() {
          count++;
        },
        getCount() {            return count;
        }
   };
}
const c = counter();
c.increment();
c.increment();
console.log(c.getCount());



// Section B: Closures

// 11. Create a counter closure. 
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const result = createCounter();
result();
result();
result();


// 12. Create a reverse counter. 
function reverseCounter() {
    let num = 10;
    return function() {
        console.log(num);
        num--;
    };
}
const rev = reverseCounter();
rev();
rev();
rev();


// 13. Create a closure-based bank account. 
// Methods: deposit() withdraw() checkBalance() 
function bankAccount() {
    let balance = 0;
    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            balance -= amount;
        },
        checkBalance() {
           console.log(balance);
        }
   };
}
const account = bankAccount();
account.deposit(5000);
account.withdraw(1000);
account.checkBalance();


// 14. Create a closure that remembers the username forever.
function user(name) {
    return function() {
        console.log(name);
    };
}
const person = user("Ram");
person();


// 15. Create a closure-based login attempt tracker.
//  After 3 failed attempts: Account Locked 
function loginTracker() {
    let attempts = 0;
    return function() {
        attempts++;
        if (attempts >= 3) {
            console.log("Account Locked");
        } else {
            console.log("Wrong Password");
        }
    };
}
const login = loginTracker();
login();
login();
login();


// 16. Build a closure that stores a secret password. Only getter should be available. 
function secretPassword() {
    let password = "abc123";
    return {
        getPassword() {
           return password;
        } };
}
const obj = secretPassword();
console.log(obj.getPassword());


// 17. Build a shopping cart using closure.
//  Methods: addItem() removeItem() showItems() 
function shoppingCart() {
    let items = [];
    return {
        addItem(item) {
            items.push(item);
        },
        removeItem(item) {
            items = items.filter(i => i !== item);
        },
        showItems() {
            console.log(items);
        }   };
}
const cart = shoppingCart();
cart.addItem("Laptop");
cart.addItem("Mobile");
cart.showItems();
cart.removeItem("Mobile");
cart.showItems();


// 18. Create a closure-based voting machine. Each user can vote only once. 
function votingMachine() {
    let votedUsers = [];
    return function(user) {
        if (votedUsers.includes(user)) {
            console.log("Already Voted");
        }
        else {
            votedUsers.push(user);
            console.log("Vote Accepted");
        }   };
}
const vote = votingMachine();
vote("Ram");
vote("Shyam");
vote("Ram");


// 19. Build a closure that counts how many times a function is executed.
function executionCounter(fn) {
    let count = 0;
    return function() {
        count++;
        console.log("Executed", count, "times");
        fn();
    }; }
function hello() {
    console.log("Hello");
}
const newFun = executionCounter(hello);
newFun();
newFun();
newFun();


// 20. Build a closure-based expense tracker.
//  Methods: addExpense() getTotal() 
function expenseTracker() {
    let total = 0;
    return {
        addExpense(amount) {
            total += amount;
        },
        getTotal() {
            return total;
        }   };
}
const expense = expenseTracker();
expense.addExpense(500);
expense.addExpense(200);
expense.addExpense(300);
console.log(expense.getTotal());



// Section C: IIFE 

// 21. Create an IIFE that prints: Welcome to JavaScript 
(function () {
    console.log("Welcome to JavaScript");
})();


// 22. Pass arguments to an IIFE and calculate area of rectangle.
(function (length, width) {
    let area = length * width;
    console.log("Area =", area);
})(10, 5);


// 23. Create an arrow function IIFE. 
(() => {
    console.log("Arrow Function IIFE");
})();


// 24. Use IIFE to create private variables. 
const counter = (function () {
    let count = 0;
    return {
        increment() {
            count++;
        },
        getCount() {
      return count;
        }
    };
})();
counter.increment();
counter.increment();
console.log(counter.getCount());


// 25. Create a module pattern using IIFE. 
// Methods: increment() decrement() reset() 
const Counter = (function () {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        reset() {
            count = 0;
        },
        show() {
            console.log(count);
    }};
})();
Counter.increment();
Counter.increment();
Counter.show();
Counter.decrement();
Counter.show();
Counter.reset();
Counter.show();



// Section D: Higher Order Functions

// 26. Create a function: calculate(a,b,operation)
//  Perform: add subtract multiply divide 
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));


// 27. Create your own custom HOF named: 
// repeat()
// Example :- repeat(5, sayHello) 
function repeat(times, fn) {
    for (let i = 1; i <= times; i++) {
        fn();
    }}
function sayHello() {
    console.log("Hello");
}
repeat(5, sayHello);


// 28. Create a logger HOF.
// Output: [INFO] User Logged In 
function logger(fn) {
    return function () {
        console.log("[INFO]");
        fn();
    };}
function login() {
    console.log("User Logged In");
}
const result = logger(login);
result();


// 29. Create a function execution timer using HOF. 
// Output: Execution Time: XX ms 
function timer(fn) {
    return function () {
        let start = Date.now();
        fn();
        let end = Date.now();
        console.log("Execution Time:", end - start, "ms");
    };
}
function task() {
    for (let i = 1; i <= 1000000; i++) {}
}
const newTask = timer(task);
newTask();


// 30. Create a function wrapper that counts how many times another function was called.
function countCalls(fn) {
    let count = 0;
    return function () {
        count++;
        console.log("Called", count, "times");
        fn();
    };
}
function hello() {
    console.log("Hello");
}
const newHello = countCalls(hello);
newHello();
newHello();
newHello();



// Section E :- map()

// 31. Given 
// const users = [ 
// {name:"Ram",age:25}, {name:"Mohan",age:30}, {name:"Amit",age:22} 
//  ]; 
// Return: [ "Ram", "Mohan", "Amit" ] using map. 
 const names = users.map(user => user.name);
console.log(names);


// 32. Convert 
// [1,2,3,4,5]
//  into [1,4,9,16,25] 
// using map. 
const arr = [1, 2, 3, 4, 5];
const square = arr.map(num => num * num);
console.log(square);


// 33. Create an array of product names from: 
// [ {name:"Laptop"}, {name:"Mouse"}, {name:"Keyboard"} ] 
const products = [
    { name: "Laptop" },
    { name: "Mouse" },
    { name: "Keyboard" }
];
const names = products.map(product => product.name);
console.log(names);



// Section F :- Filter()

// 34. Filter all even numbers. 
// Input: [1,2,3,4,5,6] 
// Output: [2,4,6] 
const arr = [1, 2, 3, 4, 5, 6];
const even = arr.filter(num => num % 2 === 0);
console.log(even);


// 35. Filter users whose age is greater than 25. 
const users = [
    { name: "Priya", age: 20 },
    { name: "Nera", age: 21 },
    { name: "Sita", age: 22 }
];
const result = users.filter(user => user.age > 25);
console.log(result);


// 36. Filter expensive products. 
// Condition: price > 1000 
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];
const expensive = products.filter(
    product => product.price > 1000
);
console.log(expensive);



// Section G: reduce()

// 37.  Find total sum. 
// Input: [10,20,30,40] 
// Output: 100 
const arr = [10, 20, 30, 40];
const total = arr.reduce(
    (acc, curr) => acc + curr,
    0
);
console.log(total);


// 38. Find maximum value using reduce. 
// Input: [5,12,3,45,2] 
// Output: 45 
const arr = [5, 12, 3, 45, 2];
const max = arr.reduce(
    (acc, curr) => curr > acc ? curr : acc
);
console.log(max);


// 39. Count total characters. 
// Input: ["JavaScript","React","Node"] 
// Output: 20 
const arr = ["JavaScript", "React", "Node"];
const total = arr.reduce(
    (acc, curr) => acc + curr.length,
    0
);
console.log(total);



// 40. Given: 
const orders = [
{ id:1,amount:5000 status:"completed" },
{ id:2, amount:2000,status:"pending" },
{ id:3, amount:7000,
status:"completed" },
{ id:4, amount:1000,
status:"completed" }
];

// Using only: 
// filter()
//  map() 
// reduce() 

// Find :-

// 1. Completed Orders 
const completedOrders =
orders.filter(order => order.status === "completed");
console.log(completedOrders);

// 2. Total Revenue 
const totalRevenue = completedOrders.reduce(
    (acc, curr) => acc + curr.amount,
    0
);
console.log(totalRevenue);

// 3. Average Revenue
const averageRevenue =
totalRevenue / completedOrders.length;
console.log(averageRevenue);

//  4. Highest Order Amount
const highestAmount = completedOrders.reduce(
    (acc, curr) =>
        curr.amount > acc ? curr.amount : acc,
    0
);
console.log(highestAmount);

//  5. Array of Order IDs 
const ids = completedOrders.map(
    order => order.id
);
console.log(ids);


