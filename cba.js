/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
suite.add('native', function () {
	function fn(a,b) {
		return a + b;
	}
	const values = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
	const length = values.length;
	for(let i = 0; i < length; i++) {
		fn(values[i][0],values[i][1]);
	}
}).add('arrow function', function () {
	const fn = (a,b) => {
		return a + b;
	};
	const values = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
	const length = values.length;
	for(let i = 0; i < length; i++) {
		fn(values[i][0],values[i][1]);
	}
}).add('call', function () {
	function fn(a,b) {
		return a + b;
	}
	const values = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
	const length = values.length;
	for(let i = 0; i < length; i++) {
		fn.call(null, values[i][0],values[i][1]);
	}
}).add("bind", function () {
	function fn(a,b) {
		return a + b;
	}
	const values = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
	const length = values.length;
	for(let i = 0; i < length; i++) {
		fn.bind(null, values[i][0],values[i][1])();
	}
}).add('apply', function () {
	function fn(a,b) {
		return a + b;
	}
	const values = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
	const length = values.length;
	for(let i = 0; i < length; i++) {
		fn.apply(null, values[i]);
	}
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run();
