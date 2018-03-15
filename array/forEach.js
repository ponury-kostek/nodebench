/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
const fast = require("fast.js");
const arr = "1,2,3,4,5,6,7,8,9,10".split(",");
suite.add("native", function () {
	arr.forEach(i => i + 1);
}).add("fast.js", function () {
	fast.forEach(arr, i => i + 1);
}).on("cycle", function (event) {
	console.log(String(event.target));
}).on("complete", function () {
	console.log("Fastest is " + this.filter("fastest").map("name"));
}).run({"async": true});

