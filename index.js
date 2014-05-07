var _ = require('lodash');

/**
 * Expose module.
 */

module.exports = formatKeys;

/**
 * Format object keys recursively.
 *
 * @param {Object} object
 * @param {Function} formatter
 * @returns {Object}
 */

function formatKeys(object, formatter) {
  if (! Array.isArray(object) && ! _.isPlainObject(object)) return object;

  if (Array.isArray(object)) return _.map(object, formatKeys.bind(null, formatter));

  return Object.keys(object).reduce(function (mem, key) {
    var newKey = formatter(key);
    mem[newKey] = formatKeys(object[key], formatter);
    return mem;
  }, {});
}
