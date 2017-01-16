/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const obj = {
	a : 1,
	b : 2,
	c : 3,
	d : 4,
	e : 5,
	f : 6,
	g : 7,
	h : 8
};
for (var key in obj) {
	console.log(key);
}
suite.add('hasOwnProperty', function () {
	for (var key in obj) {
		obj.hasOwnProperty(key);
	}
}).add('hasOwnProperty', function () {
	for (var key in obj) {
		obj.hasOwnProperty(key);
	}
}).add('in', function () {
	for (var key in obj) {
		key in obj;
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async' : true});