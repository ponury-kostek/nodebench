/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
for (var i = 0; i < 10; i++) {
	const value = (i % 3) / (i % 3);
	console.log('isNan(value)   ', isNaN(value));
	console.log('value !== value', value !== value);
}
const nan = (value) => {
	return value !== value;
}
function is_nan(value) {
	return value !== value;
}
suite.add('isNaN', function () {
	for (var i = 0; i < 1000; i++) {
		const value = (i % 3) / (i % 3);
		isNaN(value);
	}
}).add('is_nan', function () {
	for (var i = 0; i < 1000; i++) {
		const value = (i % 3) / (i % 3);
		is_nan(value);
	}
}).add('nan', function () {
	for (var i = 0; i < 1000; i++) {
		const value = (i % 3) / (i % 3);
		nan(value);
	}
}).add('value !== value', function () {
	for (var i = 0; i < 1000; i++) {
		const value = (i % 3) / (i % 3);
		value !== value;
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async' : true});