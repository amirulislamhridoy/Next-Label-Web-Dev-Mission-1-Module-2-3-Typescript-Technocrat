"use strict";
// spread operator, rest operator, default parameter
// spread operator
const boyfriends = ['kasem', 'monir', 'ruhul'];
const girlFriends = ['sadia', 'fahima', 'monica'];
boyfriends.push(...girlFriends);
// rest operator
const nameFunction = (...names) => {
    console.log(names);
};
// default parameter
const add = (num1, num2 = 10) => { };
