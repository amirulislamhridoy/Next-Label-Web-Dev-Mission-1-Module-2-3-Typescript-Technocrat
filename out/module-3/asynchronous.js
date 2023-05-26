"use strict";
// asynchronous
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function asynchronousFunction() {
    return new Promise((resolve, rejected) => {
        const data = 'data is string';
        if (data) {
            resolve('data is true');
        }
        else {
            rejected(false);
        }
    });
}
const d3 = () => __awaiter(void 0, void 0, void 0, function* () {
    const a3 = yield asynchronousFunction();
    console.log(a3);
});
d3();
