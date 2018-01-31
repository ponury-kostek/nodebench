/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
function array_add_unique(array, value) {
	if (!~array.indexOf(value)) {
		array[array.length] = value;
	}
}
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;
suite.add('Array 10', function () {
	const array = [];
	for (var i = 0; i < 10; i++) {
		array_add_unique(array, i);
	}
}).add('Set 10', function () {
	const set = new Set();
	for (var i = 0; i < 10; i++) {
		set.add(i);
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
	suite = new Benchmark.Suite;
	suite.add('Array 100', function () {
		const array = [];
		for (var i = 0; i < 100; i++) {
			array_add_unique(array, i);
		}
	}).add('Set 100', function () {
		const set = new Set();
		for (var i = 0; i < 100; i++) {
			set.add(i);
		}
	}).on('cycle', function (event) {
		console.log(String(event.target));
	}).on('complete', function () {
		console.log('Fastest is ' + this.filter('fastest').map('name'));
		suite = new Benchmark.Suite;
		suite.add('Array 1000', function () {
			const array = [];
			for (var i = 0; i < 1000; i++) {
				array_add_unique(array, i);
			}
		}).add('Set 1000', function () {
			const set = new Set();
			for (var i = 0; i < 1000; i++) {
				set.add(i);
			}
		}).on('cycle', function (event) {
			console.log(String(event.target));
		}).on('complete', function () {
			console.log('Fastest is ' + this.filter('fastest').map('name'));
		}).run({'async' : true});
	}).run({'async' : true});
}).run({'async' : true});

