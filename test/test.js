const { isArray, isFunction, isObject } = require('../src/helpers/is');
const avg = require('../src/methods/avg');

const sum = require('../src/methods/sum');

Array.prototype.sumCalculate = sum;
Array.prototype.avg = avg;

const result = [
	{
		value: 100,
	},
	{
		value: 200,
	},
].avg((item) => item.value);
console.log(result);
