"use strict";
// intruduction to object oriented programming;
const add3 = (a, b) => {
    return a + b;
};
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const calculator = new Calculator;
const sum = calculator.add(2, 3);
