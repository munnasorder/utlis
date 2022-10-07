'use strict';

const { isArray, isObject } = require("../helpers/is");

module.exports = function ownConcat(arg) {
    let exArr = this;

    if (isArray(arg)) {
        exArr = [...exArr, ...arg]
    } else if (isObject(arg)) {
        for (const property in arg) {
            exArr = [...exArr, arg[property]]
        }
    } else {
        exArr = [...exArr, arg]
    }
    return exArr;
}