/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
const fast = require("fast.js");
const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8
};
suite.add("var hasOwnProperty", function () {
	for (var key in obj) {
		if(obj.hasOwnProperty(key)) {
			const prop = obj[key];
		}
	}
}).add("const hasOwnProperty", function () {
	for (const key in obj) {
		if(obj.hasOwnProperty(key)) {
			const prop = obj[key];
		}
	}
}).add("in", function () {
	for (const key in obj) {
		if (key in obj) {
			const prop = obj[key];
		}
	}
}).add("fast", function () {
	fast.object.forEach(obj, i => i);
}).on("cycle", function (event) {
	console.log(String(event.target));
}).on("complete", function () {
	console.log("Fastest is " + this.filter("fastest").map("name"));
}).run({"async": true});