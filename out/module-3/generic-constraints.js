"use strict";
// generic constraints (constraints মানে force করা)
const addMeInMyMind = (myInfo) => {
    const crash = 'Srity is my crash';
    const data = Object.assign(Object.assign({}, myInfo), { crash });
    return data;
};
const myInfo = {
    name: 'Persian', age: 20, salary: 10000000
};
addMeInMyMind(myInfo);
