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
function ret(v) {
	return v;
}
function clo(i) {
	return () => {
		let a = i;
		a++;
		if(a%2) {
			a += 3;
		}
		--a;
		return a * 2;
	};
}
suite.add('let', function () {
	let value;
	for (var i = 0; i < length; i++) {
		value = values[i]
	}
}).add("var", function () {
	var value;
	for (var i = 0; i < length; i++) {
		value = values[i]
	}
}).add('let', function () {
	for (let i = 0; i < length; i++) {
		ret(() => {
			return a * 2;
		});
	}
}).add("var", function () {
	for (var i = 0; i < length; i++) {
		ret(i => () => {
			let a = i;
			a++;
			if(a%2) {
				a += 3;
			}
			--a;
			return a * 2;
		});
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run();