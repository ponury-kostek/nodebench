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
	},
	() => {
	},
	function a() {
	}
];
const length = values.length;
suite.add('==', function () {
	for (var i = 0, j = length; i < length; i++, j--) {
		values[i] == values[j];
	}
}).add("===", function () {
	for (var i = 0, j = length; i < length; i++, j--) {
		values[i] === values[j];
	}
}).add('!=', function () {
	for (var i = 0, j = length; i < length; i++, j--) {
		values[i] != values[j];
	}
}).add("!==", function () {
	for (var i = 0, j = length; i < length; i++, j--) {
		values[i] !== values[j];
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run();