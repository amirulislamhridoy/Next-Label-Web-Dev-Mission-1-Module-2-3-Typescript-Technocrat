"use strict";
// Mapped types
// normal array map use
const numOfArray = [1, 2, 3, 3, 2];
const stringOfArray = numOfArray.map((n, i) => n === null || n === void 0 ? void 0 : n.toString());
// console.log(stringOfArray)
// normal array use
const obj = { name: 'hridoy', roll: 20 };
const name5 = obj['name'];
// console.log(name5)
