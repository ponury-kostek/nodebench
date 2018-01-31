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
		if (a % 2) {
			a += 3;
		}
		--a;
		return a * 2;
	};
}

suite.add('loop', function () {
	const a = {a: 1, b:2};
	const b = {a: 1, b:2};
	const c = {a: 1, b:2};
	const d = {a: 1, b:2};
	const e = {a: 1, b:2};
	const a1 = {a: 1, b:2};
	const b1 = {a: 1, b:2};
	const c1 = {a: 1, b:2};
	const d1 = {a: 1, b:2};
	const e1 = {a: 1, b:2};
	const a2 = {a: 1, b:2};
	const b2 = {a: 1, b:2};
	const c2 = {a: 1, b:2};
	const d2 = {a: 1, b:2};
	const e2 = {a: 1, b:2};
	const a12 = {a: 1, b:2};
	const b12 = {a: 1, b:2};
	const c12 = {a: 1, b:2};
	const d12 = {a: 1, b:2};
	const e12 = {a: 1, b:2};
}).add('let', function () {
	let value;
	for (let i = 0; i < length; i++) {
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
			return i * 2;
		});
	}
}).add("var", function () {
	for (var i = 0; i < length; i++) {
		ret((function (i) {
			return function () {
				return i * 2;
			}
		})(i));
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run();