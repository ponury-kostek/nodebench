/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
const fast = require("fast.js");
const arr = "1,2,3,4,5,6,7,8,9,10".split(",");
suite.add("indexOf", function () {
	~arr.indexOf(9);
}).add("includes", function () {
	arr.includes(9);
}).add("fast.indexOf", function () {
	fast.indexOf(arr, 9);
}).on("cycle", function (event) {
	console.log(String(event.target));
}).on("complete", function () {
	console.log("Fastest is " + this.filter("fastest").map("name"));
}).run({"async": true});

