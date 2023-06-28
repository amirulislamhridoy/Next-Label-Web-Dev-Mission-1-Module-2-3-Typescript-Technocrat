// abstraction
// abstraction => i)interface & ii)abstract

// interface type abstraction
interface CarType{
    startCar: () => void
    stopCar: () => void
    restCar: () => void
}
 class CarTypeClass implements CarType{
    startCar(){
        console.log('The car is starting')
    }
    stopCar(){
        console.log('The car is stop now')
    }
    restCar(){
        console.log('Now the car is rest')
    }
    carPerformance(){
        console.log('Car performance is very good.')
    }
 }

// abstract type abstraction
abstract class Main {
    abstract fatherWork(): void
    abstract brotherWork: () => void
    sisterWork(){
        console.log('I have no sister')
    }
}
class Original extends Main{
    fatherWork(): void{
        console.log('My father is a gvernment employee')
    }
    brotherWork = (): void => {
        console.log('My brother is working job.')
    }
}