"use strict";
// generic function
// arrow functin 
const createArray = (param, param2) => {
    return [param, param2];
};
const result3 = createArray({ name: 'Bangladesh' }, true);
// spread opperator using
//(jodi ami hover kori taile ami return type dekte parbo) : T & {crash: string;}
function addMeInMind(myInfo) {
    const crash = 'my crash';
    const data = Object.assign(Object.assign({}, myInfo), { crash });
    return data;
}
const my2 = { name: 'hridoy', age: 23, roll: 74 };
const my3 = addMeInMind(my2);
// my3.
