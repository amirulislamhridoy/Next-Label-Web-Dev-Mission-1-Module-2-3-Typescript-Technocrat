// abstraction => interface && abstract

// interface
// interface CarType{
//     startCar: () => void
//     restCar: () => void
// }
// class CarClass implements CarType{
//     startCar(){
//         console.log('car is starting')
//     }
//     stopCar(){
//         console.log('car is stop now')
//     }
//     restCar(){
//         console.log('my car is rest now')
//     }
//     carName(){
//         console.log('my car name is XXXX')
//     }
// }
// const carClass = new CarClass()

// abstract
abstract class CarTypeClass2 {
    abstract carStart(): void
    abstract carStop: () => void
    carName(){
        console.log(' car name is XXXXX')
    }
}

class CarNameClass {
    carStart(){
        console.log('car is starting')
    }
    carStop =() => {
        console.log('car is stop now')
    }
}

const azz = new CarNameClass()
// console.log(new CarTypeClass2().carName()) // Cannot create an instance of an abstract class