/*
    -
*/

//1---------------------------------------------------------------------------------------------------------------------
//  1. CLASS AND CONSTRUCTOR

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     displayFullName() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// const person1 = new Person("Stenly", "Adam");
// console.log(person1);
// person1.displayFullName();
// const person2 = new Person("John", "Doe");
// person2.displayFullName();



//2---------------------------------------------------------------------------------------------------------------------
//  2. INHERITANCE

//This class always use as a blueprint for the objects
class Person {      //Class always start with CAPITAL letter
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

class Student extends Person{
    constructor(firstName, lastName, NIM) {
        super(firstName, lastName);
        this.NIM = NIM;
    }

    displayNIM() {
        console.log(`Your NIM is ${this.NIM}`);
    }

    //Static Member
    static sayHello() {
        console.log(`Hello World`);
    }

    //Setter and Getter
    set studentScore(score) {
        this.score = score;
    }

    get studentScore(){
        return this.score;
    }
}

const student1 = new Student("John", "Doe", "12345");
student1.displayFullName();
student1.displayNIM();
Student.sayHello();

student1.studentScore = 90;
console.log(student1.studentScore);

//3---------------------------------------------------------------------------------------------------------------------
//  3. STATIC MEMBER

//js: 50

//4---------------------------------------------------------------------------------------------------------------------
//  4. SETTER AND GETTER

//js: 55