console.log("Hello")

let a = 0
console.log(a)
a = 10;
console.log(a)
a = "Hello there"
console.log(a)


// const
// cant be reassigned
let myName = "James"
console.log(myName)


// Data types in JS

// Primitives
// Stored in location on the stack

// string
// number
// boolean
// null (intentionally left empty)
// undefined (variabled undefined)

console.log(typeof myName)

// reference 
// dynamic allocated memory
// A pointer to location memory 

// Ex:
// arrays
// objects
// literals
// anything else (pretty much)

// String methods and concatenations
const firstName = "Leonardo";
const lastName = "Faife";
const age = 21;
const greeting = "Hello my name is Leonardo";
const tags = "software, programming, and engineering";

let fullname = firstName + " " + lastName;
console.log(fullname);

// string literals(not right name) can be types in multiple lines
let myGreeting = `${greeting}, but my full name 
is ${fullname} and I am ${age} years old`;
console.log(myGreeting);

// Appending
let val;
console.log(val);
val = "John";
console.log(val);
// val = val + Doe
val += "Doe";
console.log(val);

//ToUpper case
let city = "Orlando";
console.log(city);
city = city.toUpperCase();
console.log(city);

//ToLower case
let town = "Winter Park";
console.log(town);
town = town.toLowerCase();
console.log(town);

// index of a character in a string

let char = town.charAt(); // returns character at specfic index in a string
console.log(char);

// Indexes in JS start at 0 
// Index at 2 really means the 3rd characer
let arr = ["one", "two", "three"];
console.log("At index 0: " + arr[0]);
console.log("At index 0: " + arr[1]);
console.log("At index 0: " + arr[2]);

let longWord = "Indeonapolis";
// getting a substring from a longer string
console.log(longWord.substring(0, 5));
console.log(longWord.substring(5, 10));
console.log(longWord.substring(10));

// Slice a string
console.log(longWord.slice(0, 5));
console.log(longWord.slice(5, 10));
console.log(longWord.slice(10));

// includes()
// returns a boolean
// can use this as a check statement (if statement)
console.log(longWord.includes("a"));

// Template literals
const name = "Leonardo";
const surname = "Faife";
const howOld = 21;

let html;
html = `
<ul>
    <li>First Name: ${firstName}</li>
    <li>Last Name: ${surname} </li>
    <li>I am ${howOld} years old</li>
</ul>
`
document.innerHTML = html;

// Math object
// It has methods attached to it

// Eulors number
console.log(Math.E)
console.log(Math.sqrt(25))

// Comparitive Operators

// Equal to
// Greater than
// Greater than and Equal to
// Less than

// Logical operators
// if else

// Truthy and Falsy checks

// null is a falsey value
let item = null;
// 0 is a falsy number
item = 0;
// Values larger than 0 are truthy
item = 10;
// Values smaller than 0 are truthy
item = -10

if (item) {
    console.log("This must be true")
} else {
    console.log("This must be false")
}

if (item > 5) {
    console.log("Something")
} else {
    console.log("Something else")
}

if (item > 5 || item < 5) {
    console.log("Hello there")
} else {
    console.log("goodbye there")
}

let newItem = "hello";
// == vs ===
// Checks for value equality
// ===
// Checks for value and type equality
if (item > 5 && newItem === "hello") {
    // Execute this
    console.log("Hello there");
} else {
    // execute this instead
    console.log("goodbye there");
}
// Terniry operator
// an inline if statement

let number = 100; // Turn to 90 once document is defined correctly
console.log(number === 100 ? "Yes it is!" : "No it is not") 

// better to do this instead of a ton of if statements
let color = "blue"

switch(color) {
    case "red":
    console.log("Color is Red")
    case "blue":
    break;
    console.log("Color is Blue")
    case "green":
    break;
    console.log("Color is Green")
    break;
    default: 
    console.log("Color has no match")
}

// Arrays

let names = ["cam", "sean", "mia", "jenny", "john"]
console.log(names)
console.log(names[0])
console.log(names[1])

// add to the array
names.push("Leonardo")
console.log(names)

// pop items off the array
names.pop("Leonardo")
console.log(names)

// Higher order functions

// filter
let newArr1 = names.forEach((name) => {
    console.log(`The name is: ${name}`)
})

// filter
let newArr2 = names.filter((x) => {
    return x !== "cam"
})
console.log(newArr2);

let newArr3 = names.filter((x) => x !== "cam");
console.log(newArr3);

let newArr4 = names.filter((x) => x !== "cam");
console.log(newArr4);

let newFound = names.find((x) => x == "cam");
console.log(nameFound);

let indexFound = names.findIndex((x) => x == "cam");
console.log(indexFound);
console.log(names(indexFound));

// Objects

let person = {
    name: "Leonardo",
    surname: "Faife",
    age: 21,
    phoneType: "Apple",
    getphoneType: function() {
        return this.phoneType;
    },
};

// Get all keys for this object
console.log(Object.key[person]);
const keys = Object.keys(person)

console.log(person);
console.log(person["name"]);
console.log(person["surname"]);
console.log(person["phoneType"]);

// Does not execute the function
console.log(person.getphoneType);
console.log(person.getphoneType());

// Combine a few things there
// Arrays, objects & higher order functions

let randomObjectArray = [
    {
    name: "Leonardo",
    surname: "Faife",
    gaolsScored: 21,
    },
    {
        name: "Joh ",
        surname: "Doe",
        gaolsScored: 9,
    },
    {
        name: "Eric",
        surname: "Lemons",
        gaolsScored: 18,
    }
]

let newRandomArray = randomObjectArray.map((x) => {
    return {
        name: x.name,
        surname: x.surname,
        gaolsScored: x.gaolsScored + 1,
     };
}); 

console.log(newRandomArray);

// Looping

// for loop

let distance = 10;
for (let i = 0; i < distance; i++) {
    // execute inside here
    console.log(`Our index value is:` + 1)
}

// Sheep example
for (let i = 0; i < 5; i++) {
    console.log(`Sheep number is: ${i}`);
}

for (let i = 0; i < 5; i++) {
    console.log(`Sheep number is: ${i + 1}`);
}

// While loop

let Newval = 10;
while (newVal < 10) {
    console.log("Hey I am inside a while loop" + newVal);   
    newVal += 1;
}

// functions

function greetMe(name) {
    console.log(`Hello there ${name}`);
}

greetMe;
greetMe();
greetMe("Cameron");

// rule of thumb
// should accept a max of 3 function parameters
// else rather accept an Object. Define an object if parameters exceed 3
function addNumbers(num1, num2) {

}

function addNumbers(num1, num2, num3, num4, num5) {
    
}
// Example of the object
let nums = {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0,

};

nums[0] = 5;

function addNumbers(nums) {
    let total = nums[0] + nums[1] + nums[2] + nums[4] + nums[4];
    console.log("Total is: " + total);
    
}

addFiveNumbers([2, 5, 8, 23, 32])

function getSlices(breadName) {
    if(breadName == " ") {
        console.log("Whoops, no bread name given");
        return;
    }
    switch(breadName) {
        case "Albany":
            console.log(`${breadName} sells loads with 30 slices`);
            break;
        case "Sesko":
            console.log("Albany sells loads with 40 slices");
            break;
        case "Woolies":
            console.log("Albany sells loads with 60 slices");
            break;
        default:
            console.log("No bread company")
            break;
            
    }
}
getSlices();
getSlices("Sesko");
getSlices("Albany");

let todaysDate = new Date()
console.log(todaysDate);

let day = todaysDate.getDate(); // Day of the week
console.log(day);

let year = todaysDate.getUTCFullYear();
console.log(year);

console.log(`${day}/${month}/${year}`);




