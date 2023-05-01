"use strict";
function addFn(num1, num2) {
    return num1 + num2;
}
addFn(2, 2);
const addArrow = (num1, num2) => console.log('hello');
const asikPary = {
    name: "Asik",
    cost: 500,
    costFn: function (money) {
        console.log(`your cost ${this.cost + money}`);
    }
};
const asikParyCost = asikPary.costFn;
asikParyCost(400);
