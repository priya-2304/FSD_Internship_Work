// Section A :- Objects & Methods

// 1. Ek student object banao jisme:
//  ● name 
// ● age
//  ● city 
// Store ho. 
const student = {
  name: "Priya",
  age: 20,
  city: "Delhi"
};


// 2. Upar wale object ka name print karo. 
console.log(student.name);


// 3. Object me greet() method add karo jo print kare:
//  Hello I am Ram 
student.greet = function () {
  console.log(`Hello I am ${this.name}`);
};
student.greet();


// 4.Object me isAdult() method banao jo age check kare. 
student.isAdult = function () {
  return this.age >= 18;
};
console.log(student.isAdult());


// 5. Object ki sabhi keys print karo. 
console.log(Object.keys(student));


// 6. Object ki sabhi values print karo. 
console.log(Object.values(student));


// 7. Check karo ki object me email property hai ya nahi. 
console.log(student.hasOwnProperty("email"));


// 8. Object me dynamically property add karo.
//  student.course = "MERN"; 
student.course = "MERN";
console.log(student);


// 9. Object se age property delete karo. 
delete student.age;
console.log(student);


// 10. Ek object ka clone banao. 
const cloneStudent = Object.assign({}, student);
console.log(cloneStudent);



// Section B  :-  this Keyword 

// 11. Ek object banao jisme showName() method ho aur this.name print kare. 
const user = {
  name: "Priya Deswal",
  showName() {
    console.log(this.name);
  }
};
user.showName();


// 12. Ek object me:
//  name = "Ram" 
// store karo aur method se uppercase print karo. 
const user1 = {
  name: "Ram",
  showUpperCase() {
    console.log(this.name.toUpperCase());
  }
};
user1.showUpperCase();


// 13. Object me do methods banao:
//  deposit()
//  withdraw()
//  Aur balance update karo. 
const account = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    this.balance -= amount;
  } };
account.deposit(500);
account.withdraw(200);
console.log(account.balance);


// 14. Predict Output 
const users = {
 name:"Ram", 
show(){
 console.log(this.name);
 } }; 
users.show(); 

// Output :- Ram


// 15. Predict Output 
const person = {
  name: "Ram",
  show: () => {
    console.log(this.name);
  }};
person.show();

// Output :- undefined



// Section C :- Constructor Functions 

// 16.  Student constructor function banao.
//  Parameters: 
// name  , age 
function Student(name, age) {
  this.name = name;
  this.age = age;
}
const s1 = new Student("Priya",20);
console.log(s1);


// 17. 3 student objects create karo constructor se. 
function Students(name, age) {
  this.name = name;
  this.age = age;
}
const ss1 = new Students("Prachi", 20);
const s2 = new Students("Nera", 22);
const s3 = new Students("Sita", 19);
console.log(ss1);
console.log(s2);
console.log(s3);


// 18. Constructor function me greet() method add karo. 
Students.prototype.greet = function () {
    console.log(`Hello I am ${this.name}`);
};

ss1.greet();


// 19. Predict Output 
function User(name){
     this.name=name; 
    }
const u1=new User("sita"); 
console.log(u1.name); 

// output :-  sita


// 20. Car constructor function banao. 
// Properties:
// (i) brand
// (ii) Price
function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}
const car1 = new Car("BMW", 50000000);
console.log(car1);



// Section D: Prototype

// 21. Student constructor banao aur prototype me greet() method add karo. 
function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.greet = function () {
    console.log(`Hello I am ${this.name}`);
};
const s1 = new Student("Ram", 20);
s1.greet();


// 22. Check karo:
//  obj.__proto__ === Student.prototype 
console.log(s1.__proto__ === Student.prototype);


// 23. Prototype me isAdult() method add karo. 
Student.prototype.isAdult = function () {
    return this.age >= 18 ? "Adult" : "Minor";
};
console.log(s1.isAdult());


// 24. Predict Output 
function User(){}
User.prototype.sayHi = function () {
    console.log("Hi");
};
const u1 = new User();
u1.sayHi();

// Output :- Hi


// 25. Prototype me course property add karo. 
User.prototype.course = "MERN";
console.log(u1.course);


// 26. Check karo:
//  u1.hasOwnProperty("course") 
console.log(u1.hasOwnProperty("course"));
// Output :- False


// 27. Check karo:
//  "course" in u1
console.log("course" in u1);
// Output :- true


// 28. Prototype chain draw karo: 
// const arr=[] 
console.log(arr.__proto__ === Array.prototype)     
console.log(Array.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)



// Section E :- Object.create() 

// 29. Animal object banao.
//  Method: eat() 
const animal = {
    eat() {
        console.log("Eating");
    }
};


// 30. Animal se dog object create karo using: 
// Object.create()
const dog = Object.create(animal);
console.log(dog);
dog.eat();


// 31. Dog me bark() method add karo. 
dog.bark = function () {
    console.log("Barking");
};
dog.bark();


// 32. Predict Output
const animal = {
    eat() {
        console.log("Eating");
    } };
const dog = Object.create(animal);
dog.eat();
// Output :- Eating




// Section F: Classes

// 33. Student class banao.
//  Properties: 
// name 
// age 
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


// 34. Class me greet() method add karo. 
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello I am ${this.name}`);
} }
const s1 = new Student("Ram", 20);
s1.greet();


// 35. Class me isAdult() method add karo. 
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello I am ${this.name}`);
    }
    isAdult() {
        return this.age >= 18 ? "Adult" : "Minor";
    } }
const s1 = new Student("Ram", 20);
console.log(s1.isAdult());


// 36. 3 objects create karo class se. 
const s1 = new Student("NERA", 20);
const s2 = new Student("PRIYA", 22);
const s3 = new Student("SITA", 17);

console.log(s1);
console.log(s2);
console.log(s3);




// Section G: Inheritance

// 37. Animal class banao. 
// Method: eat() 
class Animal {
    eat() {
        console.log("Eating");
    } }


// 38. Dog class banao jo Animal ko inherit kare. 
class Dog extends Animal {

}


// 39. Dog class me bark() method add karo. 
class Dog extends Animal {
    bark() {
        console.log("Barking");
    } }


// 40. Create: const d = new Dog(); 
// Call: d.eat(); d.bark();
// Expected Output explain karo. 

const d = new Dog();
d.eat();
d.bark();

/*
Output:

Eating
Barking

explaination - Dog object parent class (Animal) aur apni class dono ke methods access kar sakta hai.
*/