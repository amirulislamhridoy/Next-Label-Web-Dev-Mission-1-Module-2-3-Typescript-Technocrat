"use strict";
// getter, setter
class Bank {
    constructor(name) {
        this.name = 'City Bank';
        this.name = name;
    }
    // getter
    get getName() {
        return this.name;
    }
    // setter 
    set setName(name) {
        this.name = name;
    }
}
const bank = new Bank('Bangladesh Bank');
const name4 = bank.getName;
const setName = bank.setName = 'Agrany Bank';
console.log(setName);
