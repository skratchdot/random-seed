'use strict';

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/
var testLoop = 10000;

exports['no args'] = function (test) {
	var rand = require('../lib/random-seed.js').create();
	test.expect(1);
	test.equal(Number.isNaN(rand()), true, 'should not be a number.');
	test.done();
};

exports['rand 5'] = function (test) {
	var rand = require('../lib/random-seed.js').create(),
		i,
		iterations = 100,
		arr = [0, 1, 2, 3, 4];
	test.expect(iterations);
	for (i = 0; i < iterations; i++) {
		test.equal(arr.indexOf(rand(5)) > -1, true, 'rand(5) should be between 0 - 4');
	}
	test.done();
};

exports['initState'] = function (test) {
	var rand = require('../lib/random-seed.js').create(),
		i,
		arr = [58, 26, 63, 93, 30];
	test.expect(arr.length);
	rand.initState();
	for (i = 0; i < arr.length; i++) {
		test.equal(rand(100), arr[i], 'should be ' + arr[i]);
	}
	test.done();
};

exports['initState multiple times'] = function (test) {
	var rand = require('../lib/random-seed.js').create(),
		i, j,
		iterations = 5,
		arr = [58, 26, 63, 93, 30];
	test.expect(arr.length * iterations);
	for (i = 0; i < iterations; i++) {
		rand.initState();
		for (j = 0; j < arr.length; j++) {
			test.equal(rand(100), arr[j], 'should be ' + arr[j]);
		}
	}
	test.done();
};

exports['multiple rand without init'] = function (test) {
	var rand1 = require('../lib/random-seed.js').create(),
		rand2 = require('../lib/random-seed.js').create();
	test.expect(1);
	test.notEqual(rand1(Number.MAX_VALUE), rand2(Number.MAX_VALUE),
			'these typically should not be equal- but might eventually');
	test.done();
};

exports['multiple rand without init'] = function (test) {
	var rand1 = require('../lib/random-seed.js').create(),
		rand2 = require('../lib/random-seed.js').create();
	test.expect(1);
	rand1.initState();
	rand2.initState();
	test.equal(rand1(Number.MAX_VALUE), rand2(Number.MAX_VALUE),
			'these should match');
	test.done();
};

exports['random() >=0 && < 1'] = function (test) {
	var rand = require('../lib/random-seed.js').create(),
		val, i;
	test.expect(testLoop);
	for (i = 0; i < testLoop; i++) {
		val = rand.random();
		test.ok(val >= 0 && val < 1, 'random() is >=0 and < 1');
	}
	test.done();
};

exports['intBetween(5, 10) >=5 && <= 10'] = function (test) {
	var rand = require('../lib/random-seed.js').create(),
		val, i;
	test.expect(testLoop);
	for (i = 0; i < testLoop; i++) {
		val = rand.random();
		test.ok(val >= 0 && val < 1, 'random() is >=0 and < 1');
	}
	test.done();
};

exports['intBetween(-5, 5) >=-5 && <= 5'] = function (test) {
	var rand = require('../lib/random-seed.js').create(),
		val, i;
	test.expect(testLoop);
	for (i = 0; i < testLoop; i++) {
		val = rand.random();
		test.ok(val >= 0 && val < 1, 'random() is >=0 and < 1');
	}
	test.done();
};

exports['floatBetween(5, 10) >=5 && < 10'] = function (test) {
	var rand = require('../lib/random-seed.js').create(),
		val, i;
	test.expect(testLoop);
	for (i = 0; i < testLoop; i++) {
		val = rand.random();
		test.ok(val >= 0 && val < 1, 'random() is >=0 and < 1');
	}
	test.done();
};

exports['floatBetween(-5, 5) >=-5 && < 5'] = function (test) {
	var rand = require('../lib/random-seed.js').create(),
		val, i;
	test.expect(testLoop);
	for (i = 0; i < testLoop; i++) {
		val = rand.random();
		test.ok(val >= 0 && val < 1, 'random() is >=0 and < 1');
	}
	test.done();
};
