const sum = require('./sum');
Array.prototype.sum = sum;

module.exports = function avg(key) {
	const items = this;

	let avg = 0;

	if (key === undefined) {
		avg += parseFloat(items.sum() / items.length);
	} else {
		avg += parseFloat(items.sum(key) / items.length);
	}

	return parseFloat(avg.toPrecision(12));
};
