'use strict';

module.exports = {
	/**
	 * @returns {Boolean}
	 */
	isArray: (item) => Array.isArray(item),

	/**
	 * @returns {Boolean}
	 */
	isObject: (item) => typeof item === 'object' && Array.isArray(item) === false && item !== null,

	/**
	 * @returns {Boolean}
	 */
	isFunction: (item) => typeof item === 'function',
};
