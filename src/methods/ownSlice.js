'use strict';

const { isArray } = require("../helpers/is");

module.exports = function ownSlice (str, end) {
    const arr = this;
    const result = [];

    if (isArray(arr)) {
        const loopContinue = end > arr.length ? arr.length : end;
        for (let i = str; i < loopContinue; i++) {
            result.push(arr[i]);
        }
    }
    return result;
}