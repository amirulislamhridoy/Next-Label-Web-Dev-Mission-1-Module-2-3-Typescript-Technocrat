// polymorphism => একটা জিনিসের অনেক গুলো ‍রুপই হলো polymorphism

/*******/
class Person{
    takeNap():void{
        console.log(`I am sleeping 8 hours per day.`)
    }
}
class Student2 extends Person{
    takeNap(): void {
        console.log('I am sleeping 10 hours per day.')
    }
}
// class Developer extends Person{
//     takeNap(): void {
//         console.log('I am sleeping 6 hours per day.')
//     }
// }

function getNap(param:Person){
    param.takeNap()
}

const person1 = new Person()
const person2 = new Student2()
// const person3 = new Developer()

// getNap(person1)
// getNap(person2)
// getNap(person3)

/*******/
class Shape{
    getArea():number{
        return 0
    }
}
class Circle extends Shape{
    constructor(public radius:number){
        super()
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}
class Ractangle extends Shape{
    height:number;
    width:number;
    constructor(height:number, width:number){
        super()
        this.height = height
        this.width = width
    }
    getArea():number{
        return this.height * this.width
    }
}

const circle = new Circle(10)
const ractangle = new Ractangle(20, 10)
// console.log(circle)
// console.log(ractangle)