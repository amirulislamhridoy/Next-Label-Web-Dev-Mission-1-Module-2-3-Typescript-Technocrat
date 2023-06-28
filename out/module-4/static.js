"use strict";
// static in class
class Bank2 {
    constructor(name) {
        this.name = 'City Bank';
        this.name = name;
    }
    static getAddress(address) {
        this.address = address;
        console.log(this.address);
    }
}
Bank2.address = 'Uttara';
// const address = Bank2.address
// Bank2.getAddress('Dhaka')
// console.log(address)
// const banks = new Bank2('bd bank')
// const an = banks.address //It will  give an error because this is static
// console.log(an)
