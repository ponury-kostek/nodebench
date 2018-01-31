/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
function add(a,b) {
	return a + b;
}
function add32(a,b) {
	return a|0 + b|0;
}
suite.add('native', function () {
	for (var i = 0; i < 1000; i++) {

		i + i;
	}
}).add('add', function () {
	for (var i = 0; i < 1000; i++) {

		add(i,i);
	}
}).add('add32', function () {
	for (var i = 0; i < 1000; i++) {

		add32(i,i);
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async' : true});