// intruduction to object oriented programming;

// javascript programming 2 types. i) functional programming. ii) object programming.

type Add = (a: number, b: number) => number

const add3: Add = (a,b) => {
    return a + b
}
class Calculator{
    add(a:number, b:number):number{
        return a+b
    }
}
const calculator = new Calculator;
const sum = calculator.add(2,3)