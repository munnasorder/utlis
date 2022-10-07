const { isArray, isFunction, isObject } = require('../src/helpers/is');
const avg = require('../src/methods/avg');
const chunk = require('../src/methods/chunk');
const collapse = require('../src/methods/collapse');
const combine = require('../src/methods/combine');
const ownConcat = require('../src/methods/ownConcat');
const ownSlice = require('../src/methods/ownSlice');
const sum = require('../src/methods/sum');

Array.prototype.sumCalculate = sum;
Array.prototype.avg = avg;
Array.prototype.ownSlice = ownSlice;
Array.prototype.chunk = chunk;
Array.prototype.collapse = collapse;
Array.prototype.combine = combine;
Array.prototype.ownConcat = ownConcat;

const result = ["name", "age", "address"].ownConcat({name: 'munna', age: 23}, 'yes');
console.log(result);
