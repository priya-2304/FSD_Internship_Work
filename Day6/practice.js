// Q1. greetUser(name, callback)

function greetUser(name, callback){
    console.log("Hello " + name);
    callback(name);
}
function welcome(name){
    console.log("Welcome " + name);
}
greetUser("Ram", welcome);

// Output
// Hello Ram
// Welcome Ram



// Q2. calculate(a,b,callback)
function calculate(a,b,callback){
    return callback(a,b);
}
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
console.log(calculate(20,10,add));
console.log(calculate(20,10,multiply));
console.log(calculate(20,10,divide));

// Output
// 30
// 200
// 2



// Q3. Callback Calculator
function calculator(a,b,operation){
    return operation(a,b);
}
console.log(calculator(20,10,(a,b)=>a+b));
console.log(calculator(20,10,(a,b)=>a-b));
console.log(calculator(20,10,(a,b)=>a*b));

// Output
// 30
// 10
// 200



// Q4. processStudent(student, callback)
function processStudent(student, callback){
    callback(student);
}
function displayStudent(student){
    console.log("Name:",student.name);
    console.log("Age:",student.age);
}
processStudent(
    {
        name:"Rahul",
        age:21
    },
    displayStudent
);


// Output
// Name: Rahul
// Age: 21




// Q5. downloadFile(callback)
function downloadFile(callback){
    console.log("Downloading file...");
    setTimeout(()=>{
        console.log("File Downloaded");
        callback();
    },2000);
}
downloadFile(()=>{
    console.log("Opening File");
});

// Output :-
// (after 2 sec)
// Downloading file...
// File Downloaded
// Opening File




// Q6. registerUser(callback)
function registerUser(callback){
    console.log("User Registered");
    callback();
}
function sendEmail(){
    console.log("Welcome Email Sent");
}
registerUser(sendEmail);

// Output
// User Registered
// Welcome Email Sent



// Q7. placeOrder(callback)
function placeOrder(callback){
    console.log("Order Placed");
    callback();
}
function generateInvoice(){
    console.log("Invoice Generated");
}
placeOrder(generateInvoice);

// Output
// Order Placed
// Invoice Generated



// Q8. fetchUser(callback)
function fetchUser(callback){
    setTimeout(()=>{
        callback({
            id:1,
            name:"Rahul"});
    },3000);
}
fetchUser((user)=>{
    console.log(user);
});


// Output
// (after 3 sec)
// { id:1, name:'Rahul' }



// Q9. OTP Verification
function verifyOTP(callback){
    console.log("Verifying OTP...");
    setTimeout(()=>{
        callback();
    },2000);
}
verifyOTP(()=>{
    console.log("OTP Verified");
});

// Output
// Verifying OTP...
// OTP Verified



// Q10. Login System
function login(callback){
    console.log("Logging In...");
    setTimeout(()=>{
        callback();
    },1000);
}
login(()=>{
    console.log("Login Successful");
});

// Output
// Logging In...
// Login Successful



// Q11 Predict Output
console.log("A");
setTimeout(()=>{
    console.log("B");
},0);
console.log("C");

// Output
// A
// C
// B



// Q12 Predict Output
setTimeout(()=>{
    console.log(1);
},1000);
console.log(2);

// Output
// 2
// 1



// Q13 Predict Output
console.log("Start");
setTimeout(()=>{
    console.log("Timeout");
},0);
console.log("End");

// Output
// Start
// End
// Timeout



// Q14 Countdown
setTimeout(()=>console.log(5),1000);
setTimeout(()=>console.log(4),2000);
setTimeout(()=>console.log(3),3000);
setTimeout(()=>console.log(2),4000);
setTimeout(()=>console.log(1),5000);
setTimeout(()=>console.log("Boom"),6000);

// Output
// 5
// 4
// 3
// 2
// 1
// Boom


// Q15 Digital Bomb Timer
let time = 10;
let id = setInterval(()=>{
    console.log(time);
    time--;
    if(time===0){
        console.log("Boom");
        clearInterval(id);
    }
},1000);




// Q16 Delayed Greeting
function greet(name){
    setTimeout(()=>{
        console.log("Hello " + name);
    },2000);
}
greet("Ram");

// Output
// (after 2 sec)
// Hello Ram



// Q17 Delayed Notification
setTimeout(()=>{
    console.log("New Notification Received");
},3000);


// Q18 Delayed Button Disable
setTimeout(()=>{
    console.log("Button Disabled");
},2000);


//Q19 Redirect Simulation

console.log("Redirecting...");

setTimeout(()=>{
    console.log("Moved to Home Page");
},3000);

//Q20 wait(seconds, callback)

function wait(seconds, callback){

    setTimeout(()=>{
        callback();
    },seconds*1000);

}
wait(3,()=>{
    console.log("Task Completed");
});


//Output - Task Completed

// Q21. Login → User → Orders → Show Orders
function login(callback){
    setTimeout(()=>{
        console.log("Login Successful");
        callback();
    },1000);
}
function getUser(callback){
    setTimeout(()=>{
        console.log("User Data Fetched");
        callback();
    },1000);
}
function getOrders(callback){
    setTimeout(()=>{
        console.log("Orders Fetched");
        callback();
    },1000);
}
login(()=>{
    getUser(()=>{
        getOrders(()=>{
            console.log("Displaying Orders");
        });
    });
});

// Output
// Login Successful
// User Data Fetched
// Orders Fetched
// Displaying Orders


// Q22. 5-Level Callback Hell
setTimeout(()=>{
    console.log("Level 1");

    setTimeout(()=>{
        console.log("Level 2");

        setTimeout(()=>{
            console.log("Level 3");

            setTimeout(()=>{
                console.log("Level 4");

                setTimeout(()=>{
                    console.log("Level 5");
                },1000);

            },1000);

        },1000);

    },1000);

},1000);

// Q23. Food Ordering System

function order(cb){
    console.log("Order Received");

    setTimeout(()=>{
        console.log("Food Cooked");

        setTimeout(()=>{
            console.log("Food Packed");

            setTimeout(()=>{
                console.log("Delivered");
            },1000);

        },1000);

    },1000);
}

order();

//Q24. Hospital Process

console.log("Registration");

setTimeout(()=>{
    console.log("Doctor Checkup");

    setTimeout(()=>{
        console.log("Medical Test");

        setTimeout(()=>{
            console.log("Medicine Given");
        },1000);

    },1000);

},1000);


// Q25. College Admission

console.log("Form Submitted");

setTimeout(()=>{
    console.log("Verification Completed");

    setTimeout(()=>{
        console.log("Fees Paid");

        setTimeout(()=>{
            console.log("Admission Confirmed");
        },1000);

    },1000);

},1000);

// Q26. Signup → Verify Email → Login → Dashboard

console.log("Signup Successful");

setTimeout(()=>{
    console.log("Email Verified");

    setTimeout(()=>{
        console.log("Login Successful");

        setTimeout(()=>{
            console.log("Dashboard Opened");
        },1000);

    },1000);

},1000);

// Q27. Nested Callbacks with Random Delays

setTimeout(()=>{
    console.log("Task 1");

    setTimeout(()=>{
        console.log("Task 2");

        setTimeout(()=>{
            console.log("Task 3");
        },1500);

    },2000);

},1000);

// Q28. Weather Fetch Simulation

console.log("Fetching Weather...");

setTimeout(()=>{
    console.log("Temperature : 32°C");
},2000);


// Q29. E-Commerce Checkout Flow

console.log("Cart Created");

setTimeout(()=>{
    console.log("Payment Successful");

    setTimeout(()=>{
        console.log("Order Confirmed");

        setTimeout(()=>{
            console.log("Product Shipped");
        },1000);

    },1000);

},1000);


//Q30. Movie Booking Flow

console.log("Selecting Seats");

setTimeout(()=>{
    console.log("Payment Done");

    setTimeout(()=>{
        console.log("Ticket Booked");
    },1000);

},1000);

// Q31. Live Clock

setInterval(()=>{
    console.log(new Date().toLocaleTimeString());
},1000);

// Q32. Stopwatch

let sec = 0;

let id = setInterval(()=>{
    sec++;
    console.log(sec);
},1000);

// Pause
clearInterval(id);

// Reset
sec = 0;


// Q33. Traffic Light Simulation

let colors = ["Red","Yellow","Green"];
let i = 0;

setInterval(()=>{
    console.log(colors[i]);
    i = (i+1)%3;
},2000);


// Q34. Auto Slider

let images = ["Image1","Image2","Image3"];
let index = 0;

setInterval(()=>{
    console.log(images[index]);
    index = (index+1)%images.length;
},3000);

//Q35. Typing Effect

let text = "Hello World";
let i = 0;

let id = setInterval(()=>{

    process.stdout.write(text[i]);

    i++;

    if(i===text.length){
        clearInterval(id);
    }

},300);

//Output: Hello World

///Q36 Predict Output

console.log("A");

setTimeout(()=>{
    console.log("B");
},1000);
setTimeout(()=>{
    console.log("C");
},0);

console.log("D");
/*
### Output
A
D
C
B
*/

// Q37 Predict Output

function one(){
    console.log("One");
}
setTimeout(one,0);
console.log("Two");
// Output
// Two
// One

// Q38 Predict Output

console.log("Start");

for(let i=0;i<1000000000;i++){}

setTimeout(()=>{
    console.log("Timeout");
},0);

console.log("End");

// Output : 
// Start
// End
// Timeout


//Q39 Event Loop Visualizer

/*html
<h2>Call Stack</h2>
<div id="stack"></div>

<h2>Web API</h2>
<div id="webapi"></div>

<h2>Callback Queue</h2>
<div id="queue"></div>*/

document.getElementById("stack").innerHTML="console.log()";

setTimeout(()=>{
    document.getElementById("queue").innerHTML="Callback Ready";
},2000);

document.getElementById("webapi").innerHTML="Timer Running";