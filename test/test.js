const { isArray, isFunction, isObject } = require('../src/helpers/is');

const sum = require('../src/methods/sum');

Array.prototype.sumCalculate = sum;

const result = [
	{
		name: 'sum',
		value: 100,
	},
	{
		name: 'sum',
		value: 150,
	},
].sumCalculate((v) => v.value);
console.log(result);
