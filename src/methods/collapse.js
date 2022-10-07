'use strict';

const { isArray } = require("../helpers/is");

module.exports = function collapse(n) {
    const arr = this;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (isArray(arr[i])) {
            result.push(...arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}