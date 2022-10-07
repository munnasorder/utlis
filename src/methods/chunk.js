'use strict';

const { isArray } = require("../helpers/is");
const ownSlice = require("./ownSlice");

Array.prototype.ownSlice = ownSlice;

module.exports = function chunk (n) {
    const array = this;

    const result = [];
    let index = 0;

    if (isArray(array)) {
        do {
            const data = array.ownSlice(index, (n + index));
            result.push(data);
            index+=n;
        } while (index < array.length)
    }
    return result;
}