/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const arr = [1,2,3,4,5,6,7,8,9,10];
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;
suite.add('includes', function () {
	arr.indexOf(9);
}).add('indexOf', function () {
	~arr.includes(9);
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async' : true});

