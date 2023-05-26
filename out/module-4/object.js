"use strict";
// object, class, parameter properties
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`); //German shaephard says Ghew Ghew
    }
}
const animal1 = new Animal('German Shaper', 'dog', 'Ghew');
const animal2 = new Animal('Persian Steam', 'cat', 'Ghew');
console.log(animal1);
console.log(animal2);
