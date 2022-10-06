const { isArray, isFunction, isObject } = require('../src/helpers/is');
const avg = require('../src/methods/avg');
const chunk = require('../src/methods/chunk');
const ownSlice = require('../src/methods/ownSlice');
const sum = require('../src/methods/sum');

Array.prototype.sumCalculate = sum;
Array.prototype.avg = avg;
Array.prototype.ownSlice = ownSlice;
Array.prototype.chunk = chunk;

const result = [
	{
		value: 100,
	},
	{
		value: 200,
	},
	{
		value: 300,
	},
	{
		value: 400,
	},
	{
		value: 500,
	},
].chunk(3);
console.log(result);
