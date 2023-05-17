"use strict";
// type-assertion (as)
let course;
course = 'next label web developer';
// (course as string).length
const kgToGram = (param) => {
    if (typeof param === 'string') {
        return `This is string => ${param}`;
    }
    else if (typeof param === 'number') {
        return param;
    }
};
const string = kgToGram('s');
const number = kgToGram(20);
try {
}
catch (error) {
    console.log(error.message);
}
