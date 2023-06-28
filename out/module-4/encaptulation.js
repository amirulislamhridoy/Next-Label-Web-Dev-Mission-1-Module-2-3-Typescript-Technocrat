"use strict";
// encaptulation
class Family2 {
    constructor(mother) {
        this.father = 'Md Abdul Haque Howlader';
        this._balance = 2000;
        this._mother = mother;
    }
    familyFn() {
        console.log('this is our family class');
    }
    /*******Encaptulation ********/
    getBalance() {
        return this._balance;
    }
    get getBalance2() {
        return this.getBalance();
    }
}
const family2 = new Family2('Taslima Begum');
// family2._mother = '2' // It will give an error because mother property in Family is private
// console.log(family2)
console.log(family2.getBalance2);
class Son2 extends Family2 {
    // constructor(mother:string){
    //     super(mother)
    // }
    test(balance) {
        this._balance = balance;
    }
}
// const son2 = new Son2('Taslima')
// son2.test(5000)
// console.log(son2)
