/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
const vm = require('vm');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
function array_add_unique(array, value) {
	if (!~array.indexOf(value)) {
		array[array.length] = value;
	}
}
const src = 'for (var i = 0; i < 100000000000; i++) {\
array_add_unique(array, i);\
}';
const script = new vm.Script(src);
const sandbox = {
	array : [],
	array_add_unique : array_add_unique
};
script.runInNewContext(sandbox, {timeout : 1000});
suite.add('native', function () {
	const array = [];
	for (var i = 0; i < 10000; i++) {
		array_add_unique(array, i);
	}
}).add('vm', function () {
	const sandbox = {
		array : [],
		array_add_unique : array_add_unique
	};
	script.runInNewContext(sandbox, {timeout : 1000});
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async' : true});