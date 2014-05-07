var formatKeys = require('./index');
var assert = require('assert');

describe('#formatKeys', function () {
  it('should format keys', function () {
    var object = { foo: 'bar', deep: { kung: 'foo' } };
    var formattedObject = formatKeys(object, function upperCaseFormatter(str) {
      return str.toUpperCase();
    });

    assert.deepEqual(formattedObject, { FOO: 'bar', DEEP: { KUNG: 'foo' } });
  });
});