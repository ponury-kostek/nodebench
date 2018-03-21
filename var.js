/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
const values = [
	undefined,
	null,
	true,
	1,
	1.2,
	"string",
	[
		1,
		2,
		3
	],
	{
		a: "a",
		b: "b",
		c: "c"
	},
	() => {
	},
	function a() {
	}
];
const length = values.length;

function ret(v) {
	return v();
}

suite.add("let", function () {
	let value;
	for (let i = 0; i < length; i++) {
		value = values[i];
	}
}).add("var", function () {
	var value;
	for (var i = 0; i < length; i++) {
		value = values[i];
	}
}).add("let", function () {
	for (let i = 0; i < length; i++) {
		ret(() => i * 2);
	}
}).add("var", function () {
	for (var i = 0; i < length; i++) {
		ret((function (i) {
			return function () {
				return i * 2;
			};
		})(i));
	}
}).on("cycle", function (event) {
	console.log(String(event.target));
}).on("complete", function () {
	console.log("Fastest is " + this.filter("fastest").map("name"));
}).run();
