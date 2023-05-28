// type gard in typescript
// keyof Gard, in Gard, instanceof Gard

// keyof Gard
type Alphanewmeric = string | number;
function add4(a:Alphanewmeric,b:Alphanewmeric): Alphanewmeric{
    if((typeof a === 'number') && typeof b === 'number'){
        return a + b
    }else{
        return a.toString() + b.toString()
    }
}
add4(2,3)
add4('2','3')

// in Gard
type NormalUserType = {
    name: string
}
type AdminUserType = {
    name: string;
    role: 'admin'
}
function getUser(user: NormalUserType | AdminUserType): string{
    if('role' in user){
        return `I am an admin & my role is ${user.role}`
    }else{
        return `I am a normal user`
    }
}
console.log(getUser({name: 'New User'}))
console.log(getUser({name: 'Owner', role: 'admin'}))

// instanceof gard
class Animal2{
    name: string;
    constructor(name: string){
        this.name = name
    }
    makeSound(){
        console.log(`This is my name ${this.name}`)
    }
}
class Dog extends Animal2{
    species: string = '';
    constructor(name: string, species: string){
        super(name)
        this.species = species
    }
    dogFn(){
        console.log('I am a dog')
    }
}
class Cat extends Animal2{
    species: string = '';
    constructor(name: string, species: string){
        super(name)
    }
    catFn(){
        console.log('I am a cat')
    }
}

function getAnimal(obj: Animal2){
    // obj.
    if(isGog(obj)){
        obj.dogFn()
    }else if(obj instanceof Cat){
        obj.catFn()
    }else{
        obj.makeSound()
    }
}
function isGog(animal: Animal2):animal is Dog{
    return animal instanceof Dog
}
function isCat(animal: Animal2):animal is Cat{
    return animal instanceof Cat
}

const animal3 = new Dog('German Shaper', 'dog')
const animal4 = new Cat('Persian', 'cat')
getAnimal(animal3)
getAnimal(animal4)