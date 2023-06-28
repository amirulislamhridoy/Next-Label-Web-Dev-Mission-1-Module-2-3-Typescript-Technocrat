"use strict";
// type gard in typescript
// keyof Gard, in Gard, instanceof Gard
function add4(a, b) {
    if ((typeof a === 'number') && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
add4(2, 3);
add4('2', '3');
function getUser(user) {
    if ('role' in user) {
        return `I am an admin & my role is ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}
console.log(getUser({ name: 'New User' }));
console.log(getUser({ name: 'Owner', role: 'admin' }));
// instanceof gard
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`This is my name ${this.name}`);
    }
}
class Dog extends Animal2 {
    constructor(name, species) {
        super(name);
        this.species = '';
        this.species = species;
    }
    dogFn() {
        console.log('I am a dog');
    }
}
class Cat extends Animal2 {
    constructor(name, species) {
        super(name);
        this.species = '';
    }
    catFn() {
        console.log('I am a cat');
    }
}
function getAnimal(obj) {
    // obj.
    if (isGog(obj)) {
        obj.dogFn();
    }
    else if (obj instanceof Cat) {
        obj.catFn();
    }
    else {
        obj.makeSound();
    }
}
function isGog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
const animal3 = new Dog('German Shaper', 'dog');
const animal4 = new Cat('Persian', 'cat');
getAnimal(animal3);
getAnimal(animal4);
