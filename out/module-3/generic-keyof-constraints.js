"use strict";
// generic keyof constraints
const aa = 'name';
const bb = 'name';
function userPropertyFn(obj, key) {
    return obj[key];
}
// const user8 = userPropertyFn<keyofObjectType, keyof keyofObjectType>({name: 'hridoy', roll: 20}, 'name')
const user8 = userPropertyFn({ name: 'hridoy', roll: 20 }, 'name');
