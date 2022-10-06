'use strict';

const { isFunction } = require('../helpers/is');

module.exports = function sum(key) {
	let total = 0;

	if (key === undefined) {
		for (let i = 0; i < this.length; i++) {
			total += parseFloat(this[i]);
		}
	} else if (isFunction(key)) {
		for (let i = 0; i < this.length; i++) {
			total += parseFloat(key(this[i], i, this));
		}
	} else {
		for (let i = 0; i < this.length; i++) {
			total += parseFloat(this[i][key]);
		}
	}

	return parseFloat(total.toPrecision(12));
};
