class Animal5{
    name:string = ''
    sound:string = ''
    constructor(name: string, sound: string){
        this.name = name
        this.sound = sound
    }
    makeSound(){
        console.log(`This name is ${this.name}.`)
    }
}

class Dog2 extends Animal5{
    species:string = '';
    constructor(name:string,sound:string, species:string){
        super(name, sound)
        this.species = species
    }
    dogFn(){
        console.log('This is dog')
    }
}
class Cat2 extends Animal5{
    species:string = '';
    constructor(name:string,sound:string, species:string){
        super(name, sound)
        this.species = species
    }
    catFn(){
        console.log('This is cat')
    }
}

const az = new Dog2('German', 'dog', 'Ghew')
const ac = new Cat2('Persian', 'cat1', 'Mew')

function newFn(obj:Animal5){
    if(typeDog(obj)){
        obj.dogFn()
    }else if(typeCat(obj)){
        obj.catFn()
    }else{
        obj.makeSound()
    }
}

function typeDog(animal: Animal5): animal is Dog2{
    return animal instanceof Dog2
}
function typeCat(animal: Animal5): animal is Cat2{
    return animal instanceof Cat2
}

// az.dogFn()
// ac.catFn()
newFn(az)
newFn(ac)