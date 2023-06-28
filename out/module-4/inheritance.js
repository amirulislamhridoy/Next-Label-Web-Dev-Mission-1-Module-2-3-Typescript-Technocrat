"use strict";
// inheritance
class Student {
    constructor(name, address, age) {
        this.name = '';
        this.name = name;
        this.age = age;
        this.address = address;
    }
    maekSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
    takeClass(numberOfClass) {
        return `This ${this.name} will take ${numberOfClass} classes`;
    }
}
const mahim = new Student('Mahim', 'Haydarabad', 2);
// console.log(mahim.maekSleep(20))
class Boy extends Student {
    constructor(name, address, age, nickNameTT) {
        super(name, address, age);
        this.nickName = nickNameTT;
    }
    boySpeach(speach) {
        console.log(`My ${speach}`);
    }
}
const fahim = new Boy('Fahim', 'haydarabad', 20, 'Fahim');
const aaa = fahim.boySpeach('Taka');
