"use strict";
// null, unknown, never
// null
// "strictNullChecks": false //(It don't check null in typescript)
function getData(data) {
    if (data === null) {
        console.log('null is present');
    }
    else {
        console.log('data is positive');
    }
}
getData(null);
getData('sss');
// unknown
const checkUnknown = (data) => {
    console.log(typeof data);
};
checkUnknown(2);
checkUnknown('a');
// nerver
function returnKorena(message) {
    throw new Error(message);
}
returnKorena('kohonoi return koren na');
