"use strict";
// abstraction
// abstraction => i)interface & ii)abstract
class CarTypeClass {
    startCar() {
        console.log('The car is starting');
    }
    stopCar() {
        console.log('The car is stop now');
    }
    restCar() {
        console.log('Now the car is rest');
    }
    carPerformance() {
        console.log('Car performance is very good.');
    }
}
// abstract type abstraction
class Main {
    sisterWork() {
        console.log('I have no sister');
    }
}
class Original extends Main {
    constructor() {
        super(...arguments);
        this.brotherWork = () => {
            console.log('My brother is working job.');
        };
    }
    fatherWork() {
        console.log('My father is a gvernment employee');
    }
}
