
// Classes

class Person {
    constructor(firstName, lastName, age, address, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    getFullName() {`Full Name: ${this.firstName}${this.lastName}`;
        return 
    }

sayHello() {
    return `Good morning ${this.firstName}${this.lastName}`
}

addTwoNumbers(num1,num2) {
    return `Results: ${num1 + num2}`
}
}

const cam = new Person (
    "Leonardo",
    "Faife",
    21,
    "123 Berry Lane",
    "561382983"
);


