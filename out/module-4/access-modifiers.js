"use strict";
// access modifires => Public, Private, Protected
class Family {
    constructor(mother) {
        this.father = 'Md Abdul Haque Howlader';
        this._balance = 2000;
        this._mother = mother;
    }
    familyFn() {
        console.log('this is our family class');
    }
}
const family = new Family('Taslima Begum');
// family._mother = '2' // It will give an error because mother property in Family is private
// console.log(family)
class Son extends Family {
    // constructor(mother:string){
    //     super(mother)
    // }
    test(balance) {
        this._balance = balance;
    }
}
const son = new Son('Taslima');
son.test(5000);
console.log(son);
