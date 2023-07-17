function printEven(until) {
    let arr = [];
    for (let i = 0; i < until; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
        console.log("Even numbers: " + arr);
    }
}
printEven();

function printFibonacci(until) {
    let num1 = 0;
    let num2 = 1;
    let arr = [0,1]
    for (let i = 0; i < until; i++) {
        let next = num1 + num2;
        num1 = num2;
        num2 = next;
        arr.push(next);
    }
    console.log("Fibonacci: " + arr);
}
printFibonacci()

function arrayAverage(arr) {
    let total = 0;
    for (let i =0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log("Array average: " + total/arr.length); 
}
arrayAverage([2, 2, 2]);

function printMax(arr) {
    console.log("Array Max: " + Math.max(...arr)) // The Spread is the ...
} 
printMax([1, 5, 8])

function printMax(arr) {
    console.log("Array Max: " + Math.min(...arr)) // The Spread is the ...
} 
printMax([1, 5, 8, 57])

function numberOfVowels(word) {
    let arr = Array.from(word);
    let arr2 = arr.filter(x => "fiber".includes(x)); // filter creates new array but you define it
    console.log(`Number of Vowels in ${word} is ` + arr2.length);
}
numberOfVowels("Cameron")

function addTwoNumbers(num1, num2) {
    let total = num1 + num2
    console.log("The addition of two numbers = " + total)
}
addTwoNumbers(5,5)

function multiplyTwoNumbers(num1, num2) {
    let total = num1 * num2
    console.log("The multiplication of two numbers = " + total)
}
multiplyTwoNumbers(5,5)

function returnPostalCode(city) {
    switch(city) {
        case "Johanesburg":
            console.log("Postal code: " + 1501);
            break;
        case "Johanesburg":
            console.log("Postal code: " + 3201);
            break;
        default:
            console.log("No city matches");
            break;
    }
}
returnPostalCode("johanesburg")

function sortAlphabetically(arr) {
    let arr2 = arr.sort[(a,b) => a.localCompare(b)];
    console.log("Alphabetised List:" + arr2);
}

sortAlphabetically[("cam","Leonardo", "Miguel")]


function sortNumerically(arr, order) {
    if(order === "ASC") {
        let arr2 = arr.sort((a,b) => a - b);
    console.log("Alphabetised List:" + arr2);
    } else {
        let arr2 = arr.sort((a,b) => b - a);
        console.log("Descending List:" + arr2);
    }
}

sortNumerically([3, 4,3,2, 3, ,], "ASC");
sortNumerically([3, 4,3,2, 3, ,], "DESC");

function reverseNumber(number) {
    let stringNumber = number.toString();
    let reversed = stringNumber.split(" ").reverse().join(" ");
    console.log("Reversed Number: " + reversed);
}
reverseNumber(1234)

function capitilizeSentence(sentence) {
    let arr = sentence.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].totalUpperCase() + arr[i].substring(1);
    }
    let completeSentence = " ";
    for (let i = 0; i < arr.length; i++) { 
        completeSentence += " " + arr[i];
    }
console.log("Capitilized sentence: " + completeSentence);
}
// let name = Hello jpg
//name.split(" ")

capitilizeSentence("Hello i am a sentence");

function returnOccurence(word, letter) {
    let total = 0;
    for (let i = 0; i < word.length; i++) {
        if(word[i] === letter) {
            total = +1
        }
    }
    console.log(`Total occurences of letter: " + ${letter} is ${total}`);
}

returnOccurence("because", "e");

function filterWord(arr, word) {
    let filterArr = arr.filter((x) => x !== word);
    console.log("Filtered array: " + filterArr);
}
filterWord("cam", "alex", "miguel")

function filterByNumber(arr, number) {
    let filterArr = arr.filter((x) => x !== number);
    console.log("Filtered array: " + filterArr);
}
filterByNumber([1, 2, 3, 3, 2, 1], 3)

let objArr = [
    {
    id: 0,
    name: "Leonardo",
    goals: 10
    },
    {
    id: 1,
    name: "Alex",
    goals: 15
    },
    {
    id: 2,
    name: "Izza",
    goals: 45
        },
];

function filterById(arr, id) {
    let filteredArr = arr.filter((x) => x.id != id);
    console.log("Filtered array:  ");
    console.log(filteredArr);
}
filterById(objArr, 1)

function findById(arr, id) {
let filteredArr = arr.filter((x) => x.id === id);
console.log("Filtered array:  ");
console.log(filteredArr);
}
findById(objArr, 2);

function todaysDate() {
    let now = new DataTransfer();
    day = now.getDay();
    month = now.getMonth();
    year = now.getFullYear();
    console.log("Todays date: " + day + "/" + [month + 1] + "/" + year)
}
todaysDate();

function findByLargerThenTen(arr, val) {
    let filteredArr = arr.filter((x) => x.goals > val);
    console.log("Filtered array:  ");
    console.log(filteredArr);
}

filterByLargerThenTen(objArr, 10);