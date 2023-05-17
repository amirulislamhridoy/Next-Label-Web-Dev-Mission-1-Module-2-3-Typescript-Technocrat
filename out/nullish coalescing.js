"use strict";
//nullish coalescing, tarnary operator
// nullish coalescing opporator
// null | undefined
const yourName = null;
const y = yourName !== null && yourName !== void 0 ? yourName : 'nothing';
console.log(y);
// tarnary opperator
const myName = 'Hridoy';
const a = myName ? 'yes' : 'no';
// console.log(a)
