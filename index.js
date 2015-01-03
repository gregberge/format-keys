module.exports = formatKeys;

/**
 * Format input keys recursively.
 *
 * @param {Object} input
 * @param {Function} formatter
 * @returns {Object}
 */

function formatKeys(input, formatter) {
  if (!input || typeof input !== 'object') {
    throw new Error('input is not an object literal or array');
  }
  if (typeof formatter !== 'function') {
    throw new Error('formatter is not a function');
  }

  if (Array.isArray(input)) {
    return input.map(function(val) {
      return formatIfObject(val, formatter);
    });
  }

  return Object.keys(input).reduce(function(mem, key) {
    var newKey = formatter(key);
    mem[newKey] = formatIfObject(input[key], formatter);
    return mem;
  }, {});
}

function formatIfObject(val, formatter) {
  return typeof val === 'object' ? formatKeys(val, formatter) : val;
}
