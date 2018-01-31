/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const promise = new Promise((resolve, reject) => {
	resolve();
});
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