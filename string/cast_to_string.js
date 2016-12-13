/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
suite.add('String(value)', function () {
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
	const length = values.length;
	for (var i = 0; i < length; i++) {
		values[i] = String(values[i]);
	}
}).add('"" + value', function () {
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
	const length = values.length;
	for (var i = 0; i < length; i++) {
		values[i] = "" + values[i];
	}
}).add("'' + value", function () {
	const values = [
		{},
		{},
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
	const length = values.length;
	for (var i = 0; i < length; i++) {
		values[i] = values[i].toString();
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async' : true});