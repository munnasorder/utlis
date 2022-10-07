'use strict';

module.exports = function combine (arr) {
    const exArr = this;
    let result = {};

    for (let i = 0; i < exArr.length; i++) {
        result = {
            ...result,
            [exArr[i]]: arr[i] || null,
        };
    }
    return result;
}