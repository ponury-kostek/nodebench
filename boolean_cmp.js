/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const values = [
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false
];
const length = values.length;
suite.add('(value)', function () {
	for (var i = 0; i < length; i++) {
		if (values[i]) {
			;
		}
	}
}).add("(!value)", function () {
	for (var i = 0; i < length; i++) {
		if (!values[i]) {
			;
		}
	}
}).add('(value === true)', function () {
	for (var i = 0; i < length; i++) {
		if (values[i] === true) {
			;
		}
	}
}).add("(value === false)", function () {
	for (var i = 0; i < length; i++) {
		if (values[i] === false) {
			;
		}
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run();