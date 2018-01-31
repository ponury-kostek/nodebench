/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const values = [
	undefined,
	null,
	true,
	1,
	1.2,
	'string',
	[
		1,
		2,
		3
	],
	{
		a : 'a',
		b : 'b',
		c : 'c'
	}
];
function is_boolean(value) {
	return value === true || value === false;
}
suite.add('typeof', function () {
	const length = values.length;
	for (var i = 0; i < length; i++) {
		typeof values[i] === 'boolean';
	}
}).add('is_boolean', function () {
	const length = values.length;
	for (var i = 0; i < length; i++) {
		is_boolean(values[i]);
	}
}).add('value === true || value === false', function () {
	const length = values.length;
	for (var i = 0; i < length; i++) {
		values[i] === true || values[i] === false;
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async' : true});