/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery#imageLoader', {
    setup: function() {
      this.elem = $('#qunit-fixture').find('input');
    }
  });
  test('is chainable', function() {
    var inst1 = this.elem.imageLoader(),
      inst2 = this.elem.imageLoader();

    strictEqual(this.elem.imageLoader(), this.elem, 'should be chaninable');
    strictEqual( inst1, inst2, 'Calling function multiple times must return the same instance');
  });
}(jQuery));
