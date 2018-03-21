"use strict";
const benchmark = require("benchmark");
const suite = new benchmark.Suite();
suite.add("for-in", function forIn() {
	const obj = {
		x: 1,
		y: 1,
		z: 1
	};
	let total = 0;
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			total += obj[prop];
		}
	}
});
suite.add("Object.keys functional", function forIn() {
	const obj = {
		x: 1,
		y: 1,
		z: 1
	};
	const total = Object.keys(obj).reduce(function (acc, key) {
		return acc + obj[key];
	}, 0);
});
suite.add("Object.keys functional with arrow", function forIn() {
	const obj = {
		x: 1,
		y: 1,
		z: 1
	};
	const total = Object.keys(obj).reduce((acc, key) => {
		return acc + obj[key];
	}, 0);
});
suite.add("Object.keys with for loop", function forIn() {
	const obj = {
		x: 1,
		y: 1,
		z: 1
	};
	const keys = Object.keys(obj);
	let total = 0;
	for (let i = 0; i < keys.length; i++) {
		total += obj[keys[i]];
	}
});
if (process.versions.node[0] >= 8) {
	suite.add("Object.values functional", function forIn() {
		const obj = {
			x: 1,
			y: 1,
			z: 1
		};
		const total = Object.values(obj).reduce(function (acc, val) {
			return acc + val;
		}, 0);
	});
	suite.add("Object.values functional with arrow", function forIn() {
		const obj = {
			x: 1,
			y: 1,
			z: 1
		};
		const total = Object.values(obj).reduce((acc, val) => {
			return acc + val;
		}, 0);
	});
	suite.add("Object.values with for loop", function forIn() {
		const obj = {
			x: 1,
			y: 1,
			z: 1
		};
		const vals = Object.values(obj);
		let total = 0;
		for (let i = 0; i < vals.length; i++) {
			total += vals[i];
		}
	});
}
suite.on("cycle", function (event) {
	console.log(String(event.target));
}).on("complete", function () {
	console.log("Fastest is " + this.filter("fastest").map("name"));
}).run({"async": true});

