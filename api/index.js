class Person{
    #firstName = "";
    constructor(firstName) {
        this.#firstName = firstName
    }
    walk() {
        console.log(`${this.#firstName} is walking`);
    }
    dance() {
        console.log(`${this.#firstName} is dancing`); 
    }
}
const person1 = new Person("Siya")
const person2 = new Person("John")
person1.walk()
person2.dance()