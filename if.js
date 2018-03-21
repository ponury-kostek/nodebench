/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
const values = [
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false,
	true,
	false
];

function ok() {
	return 1;
}

function not() {
	return 2;
}

const length = values.length;
suite.add("if return ", function () {
	for (let i = 0; i < length; i++) {
		if (values[i]) {
			ok();
			return;
		}
		not();
	}
}).add("if else", function () {
	for (let i = 0; i < length; i++) {
		if (values[i]) {
			ok();
		} else {
			not();
		}
	}
}).on("cycle", function (event) {
	console.log(String(event.target));
}).on("complete", function () {
	console.log("Fastest is " + this.filter("fastest").map("name"));
}).run();
