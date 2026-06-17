// Q1 Create your own Promise that resolves after 2 seconds with: Hello World
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});
p1.then(console.log);


// Q2 Create a Promise that rejects after 3 seconds with: Server Down
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Down");
    }, 3000);
});
p2.catch(console.log);


// Q3 Create a Promise that randomly resolves or rejects
const p3 = new Promise((resolve, reject) => {
    const random = Math.random();

    if (random > 0.5) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});
p3.then(console.log).catch(console.log);


// Q4 Create a Promise that checks age
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not Eligible");
        }
    });
}

checkAge(20)
    .then(console.log)
    .catch(console.log);


// Q5 Create a Promise that validates password length
function validatePassword(password) {
    return new Promise((resolve, reject) => {
        if (password.length >= 8) {
            resolve("Valid Password");
        } else {
            reject("Password too short");
        }
    });}
validatePassword("password123")
    .then(console.log)
    .catch(console.log);


// Q6 Create a Promise that validates email

function validateEmail(email) {
    return new Promise((resolve, reject) => {
        if (email.includes("@")) {
            resolve("Valid Email");
        } else {
            reject("Invalid Email");
        }
    });}
validateEmail("test@gmail.com")
    .then(console.log)
    .catch(console.log);


// Q7 Create a Promise that simulates bank withdrawal

function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {
        if (balance >= amount) {
            resolve(`Withdrawal Successful. Remaining Balance: ${balance - amount}`);
        } else {
            reject("Insufficient Balance");
        }
    });
}
withdraw(5000, 2000)
    .then(console.log)
    .catch(console.log);


// Q8 Create a Promise that simulates ATM transaction

function atmTransaction(pin) {
    return new Promise((resolve, reject) => {
        if (pin === 1234) {
            resolve("Transaction Approved");
        } else {
            reject("Invalid PIN");
        }
    });
}atmTransaction(1234)
    .then(console.log)
    .catch(console.log);


// Q9 Create a Promise that resolves with user object

const p9 = new Promise((resolve) => {
    resolve({
        id: 1,
        name: "Ram",
        age: 25
    });
});

p9.then(console.log);


// Q10 Create a Promise that rejects with custom error object

const p10 = new Promise((resolve, reject) => {
    reject({
        code: 500,
        message: "Internal Server Error"
    });
});

p10.catch(console.log);


//Q11 Start with Promise.resolve(10)

Promise.resolve(10)
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => console.log(num));



// Q12 Convert:
// Ram → RAM → RAM MOHAN → RAM MOHAN DIXIT

Promise.resolve("Ram")
    .then(name => {
        console.log(name);
        return name.toUpperCase();
    })
    .then(name => {
        console.log(name);
        return name + " MOHAN";
    })
    .then(name => {
        console.log(name);
        return name + " DIXIT";
    })
    .then(console.log);


//Q13 Product Price Processing
//1000 → Add GST → Apply Discount → Final Price
Promise.resolve(1000)
    .then(price => {
        console.log("Original Price:", price);
        return price + (price * 18 / 100);
    })
    .then(price => {
        console.log("After GST:", price);
        return price - (price * 10 / 100);
    })
    .then(price => {
        console.log("After Discount:", price);
        return price;
    })
    .then(price => {
        console.log("Final Price:", price);
    });
    

// Q14 Login → Get User → Get Orders → Get Payment
Promise.resolve("Login Success")
    .then(msg => {
        console.log(msg);
        return "User Data";
    })
    .then(user => {
        console.log(user);
        return "Orders Data";
    })
    .then(order => {
        console.log(order);
        return "Payment Data";
    })
    .then(payment => {
        console.log(payment);
    });

    
// Q15 Movie Booking Flow
Promise.resolve("Login")
    .then(step => {
        console.log(step);
        return "Select Movie";
    })
    .then(step => {
        console.log(step);
        return "Select Seats";
    })
    .then(step => {
        console.log(step);
        return "Payment";
    })
    .then(step => {
        console.log(step);
        return "Ticket Booked";
    })
    .then(console.log);
    

// Q16 Food Ordering Flow
Promise.resolve("Login")
    .then(step => {
        console.log(step);
        return "Browse Menu";
    })
    .then(step => {
        console.log(step);
        return "Add To Cart";
    })
    .then(step => {
        console.log(step);
        return "Payment";
    })
    .then(step => {
        console.log(step);
        return "Order Confirmed";
    })
    .then(console.log);
    

// Q17 College Admission Flow
Promise.resolve("Application Submitted")
    .then(step => {
        console.log(step);
        return "Document Verification";
    })
    .then(step => {
        console.log(step);
        return "Entrance Test";
    })
    .then(step => {
        console.log(step);
        return "Fee Payment";
    })
    .then(step => {
        console.log(step);
        return "Admission Confirmed";
    })
    .then(console.log);
   
    
// Q18 Train Ticket Booking Flow
Promise.resolve("Login")
    .then(step => {
        console.log(step);
        return "Search Train";
    })
    .then(step => {
        console.log(step);
        return "Select Seat";
    })
    .then(step => {
        console.log(step);
        return "Make Payment";
    })
    .then(step => {
        console.log(step);
        return "Ticket Confirmed";
    })
    .then(console.log);
    
    
// Q19 Chain Where Each Step Waits 1 Second
function wait(message) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });}
wait("Step 1")
    .then(() => wait("Step 2"))
    .then(() => wait("Step 3"))
    .then(() => wait("Step 4"));


// Q20 Chain of 10 .then() Calls
Promise.resolve(1)
    .then(num => { console.log(num); return num + 1; })
    .then(num => { console.log(num); return num + 1; })
    .then(num => { console.log(num); return num + 1; })
    .then(num => { console.log(num); return num + 1; })
    .then(num => { console.log(num); return num + 1; })
    .then(num => { console.log(num); return num + 1; })
    .then(num => { console.log(num); return num + 1; })
    .then(num => { console.log(num); return num + 1; })
    .then(num => { console.log(num); return num + 1; })
    .then(num => { console.log(num); return num + 1; })
    .then(num => console.log("Final:", num));


// Q21 Throw error inside first .then(). Handle in catch.
Promise.resolve("Step 1")
    .then(data => {
        console.log(data);
        throw new Error("Something went wrong");
    })
    .catch(err => {
        console.log("Caught Error:", err.message);
    });


// Q22 Throw error inside third .then(). Observe skipped thens.
Promise.resolve()
    .then(() => {
        console.log("Step 1");
    })
    .then(() => {
        console.log("Step 2");
    })
    .then(() => {
        console.log("Step 3");
        throw new Error("Error at Step 3");
    })
    .then(() => {
        console.log("Step 4");
    })
    .then(() => {
        console.log("Step 5");
    })
    .catch(err => {
        console.log("Caught:", err.message);
    });


// Q23 Create chain: Step1 → Step2 → Error → Catch
Promise.resolve()
    .then(() => {
        console.log("Step 1");
    })
    .then(() => {
        console.log("Step 2");
        throw new Error("Failure");
    })
    .catch(err => {
        console.log("Caught:", err.message);
    });


// Q24 Recover from error inside catch and continue chain
Promise.resolve()
    .then(() => {
        throw new Error("Network Error");
    })
    .catch(err => {
        console.log(err.message);
        return "Recovered";
    })
    .then(result => {
        console.log(result);
    });


//Q25 Create multiple catches and observe which one executes
Promise.resolve()
    .then(() => {
        throw new Error("First Error");
    })
    .catch(err => {
        console.log("Catch 1:", err.message);
        throw new Error("Second Error");
    })
    .catch(err => {
        console.log("Catch 2:", err.message);
    });


//Q26 Convert callback based greeting function into Promise
//Callback Version
function greet(name, callback) {
    setTimeout(() => {
        callback(`Hello ${name}`);
    }, 1000);}
greet("Ram", console.log);
//Promise Version
function greet(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Hello ${name}`);
        }, 1000);
    });}
greet("Ram").then(console.log);


//Q27 Convert callback based calculator into Promise
//Callback Version
function add(a, b, callback) {
    callback(a + b);
}
add(10, 20, console.log);
//Promise Version
function add(a, b) {
    return new Promise(resolve => {
        resolve(a + b);
    });}
add(10, 20).then(console.log);


//Q28 Convert callback based login into Promise
//Callback Version
function login(username, callback) {
    setTimeout(() => {
        callback("Login Successful");
    }, 1000);
}
//Promise Version
function login(username) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Login Successful");
        }, 1000);
    });}
login("Ram").then(console.log);


//Q29 Convert callback based file download simulation into Promise
//Callback Version
function downloadFile(callback) {
    setTimeout(() => {
        callback("File Downloaded");
    }, 2000);
}
//Promise Version
function downloadFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("File Downloaded");
        }, 2000);
    });}
downloadFile().then(console.log);


//Q30 Convert callback based weather API simulation into Promise
//Callback Version
function getWeather(callback) {
    setTimeout(() => {
        callback("28°C Sunny");
    }, 1000);
}
//Promise Version
function getWeather() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("28°C Sunny");
        }, 1000);
    });}
getWeather().then(console.log);


//Q31 Fetch User, Orders, Products using Promise.all()
const getUser = new Promise(resolve => {
    setTimeout(() => resolve("User Data"), 1000);
});
const getOrders = new Promise(resolve => {
    setTimeout(() => resolve("Orders Data"), 2000);
});
const getProducts = new Promise(resolve => {
    setTimeout(() => resolve("Products Data"), 1500);
});
Promise.all([getUser, getOrders, getProducts])
    .then(result => {
        console.log(result);
    })
    .catch(console.log);
Output
[
  'User Data',
  'Orders Data',
  'Products Data'
]


//Q32 Create 5 promises with different delays
const p1 = new Promise(resolve =>
    setTimeout(() => resolve("Task 1"), 1000)
);
const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Task 2"), 2000)
);
const p3 = new Promise(resolve =>
    setTimeout(() => resolve("Task 3"), 3000)
);
const p4 = new Promise(resolve =>
    setTimeout(() => resolve("Task 4"), 4000)
);
const p5 = new Promise(resolve =>
    setTimeout(() => resolve("Task 5"), 5000)
);
Promise.all([p1, p2, p3, p4, p5])
    .then(console.log);


//Q33 Make one Promise reject. Observe Promise.all behavior
const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject("Failed Promise");
const p3 = Promise.resolve("Success 3");
Promise.all([p1, p2, p3])
    .then(console.log)
    .catch(console.log);
// Output
// Failed Promise


//Q34 Dashboard Loader using Promise.all()
const profile = new Promise(resolve =>
    setTimeout(() => resolve("Profile Loaded"), 1000)
);
const notifications = new Promise(resolve =>
    setTimeout(() => resolve("Notifications Loaded"), 1500)
);
const messages = new Promise(resolve =>
    setTimeout(() => resolve("Messages Loaded"), 2000)
);
Promise.all([
    profile,
    notifications,
    messages
])
.then(data => {
    console.log("Dashboard Ready");
    console.log(data);
});


//Q35 Parallel File Downloader using Promise.all()
function download(file) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${file} Downloaded`);
        }, Math.random() * 3000);
    });}
Promise.all([
    download("File1"),
    download("File2"),
    download("File3")
])
.then(console.log);


//Q36 Create 3 Success and 2 Fail
const p1 = Promise.resolve("Success 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.resolve("Success 3");

const p4 = Promise.reject("Fail 1");
const p5 = Promise.reject("Fail 2");

Promise.allSettled([p1, p2, p3, p4, p5])
    .then(result => {
        console.log(result);
    });


//Q37 Admin Dashboard Loader
const users = Promise.resolve("Users Loaded");
const reports = Promise.reject("Reports API Failed");
const settings = Promise.resolve("Settings Loaded");

Promise.allSettled([
    users,
    reports,
    settings
])
.then(result => {
    console.log(result);
});


//Q38 Batch Upload Simulator
function upload(file) {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.3;

        setTimeout(() => {
            if (success) {
                resolve(`${file} Uploaded`);
            } else {
                reject(`${file} Failed`);
            }
        }, 1000);
    });
}
Promise.allSettled([
    upload("Image1"),
    upload("Image2"),
    upload("Image3"),
    upload("Image4")
])
.then(console.log);


//Q39 Promise.race() & Promise.any()
//Q39-A Fastest Response using race()
const server1 = new Promise(resolve =>
    setTimeout(() => resolve("Server 1"), 5000)
);
const server2 = new Promise(resolve =>
    setTimeout(() => resolve("Server 2"), 2000)
);
const server3 = new Promise(resolve =>
    setTimeout(() => resolve("Server 3"), 1000)
);

Promise.race([
    server1,
    server2,
    server3
])
.then(console.log);
//Output
//Server 3


//Q39-B First Success using any()
const server1 = Promise.reject("Server1 Failed");
const server2 = Promise.reject("Server2 Failed");
const server3 = Promise.resolve("Server3 Success");

Promise.any([
    server1,
    server2,
    server3
])
.then(console.log)
.catch(console.log);


//Q40 FINAL BOSS – Food Delivery System
function randomFailure(step) {
    return Math.random() < 0.3;
}
function createStep(stepName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (
                (stepName === "Fetch Menu" ||
                 stepName === "Process Payment" ||
                 stepName === "Send Email") &&
                 randomFailure(stepName)
            ) {
                reject(`${stepName} Failed`);
            } else {
                console.log(`${stepName} Success`);
                resolve(stepName);
            }
        }, delay);
    });
}

createStep("Login", 1000)
.then(() => createStep("Fetch User", 1000))
.then(() => createStep("Fetch Restaurants", 1000))
.then(() => createStep("Fetch Menu", 1000))
.then(() => createStep("Place Order", 1000))
.then(() => createStep("Process Payment", 1000))
.then(() => createStep("Generate Invoice", 1000))
.then(() => createStep("Send Email", 1000))
.then(() => createStep("Track Order", 1000))
.then(() => createStep("Deliver Order", 1000))
.then(() => {
    console.log("Food Delivered Successfully");
})
.catch(err => {
    console.log("Error:", err);
})
.finally(() => {
    console.log("Process Finished");
});


//IQ1
Promise.resolve("A")
    .then(console.log);

console.log("B");
Output
B
A


//IQ2
console.log("A");

Promise.resolve()
    .then(() => {
        console.log("B");
    });

console.log("C");
//Output
//A
//C
//B


//IQ3
Promise.resolve(10)
    .then(num => num * 2)
    .then(num => num + 5)
    .then(console.log);
//Output
//25


//IQ4
Promise.reject("Error")
    .catch(console.log);
//Output
//Error


//IQ5
Promise.resolve()
    .then(() => {
        throw new Error("Boom");
    })
    .catch(err => console.log(err.message));
//Output
//Boom


//IQ6
Promise.resolve()
    .then(() => {
        return Promise.resolve(100);
    })
    .then(console.log);
//Output
//100


//IQ7
Promise.resolve()
    .then(() => {
        console.log("A");
    })
    .then(() => {
        console.log("B");
    });
//Output
//A
//B
//IQ8
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
])
.then(console.log);
//Output
//[
// 1,
// 2,
// 3
// ]
//IQ9
Promise.all([
    Promise.resolve(1),
    Promise.reject("Failed"),
    Promise.resolve(3)
])
.catch(console.log);
//Output
//Failed
//IQ10 Predict Complete Output
console.log("Start");

Promise.resolve()
    .then(() => {
        console.log("A");
        return Promise.resolve("B");
    })
    .then(console.log);

console.log("End");
//Output
//Start
//End
//A
//B