/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;

function obj() {
	this.a = "a";
	this.b = [
		1,
		2,
		3
	];
	this.c = {};
	this.d = 1;
}

function newObj() {
	return {
		a: "a",
		b: [
			1,
			2,
			3
		],
		c: {},
		d: 1
	};
}

function newObj2() {
	let obj = {};
	obj.a = "a";
	obj.b = [
		1,
		2,
		3
	];
	obj.c = {};
	obj.d = 1;
	return obj;
}

class newObj3 {
	constructor() {
		this.a = "a";
		this.b = [
			1,
			2,
			3
		];
		this.c = {};
		this.d = 1;
	}
}

function objf() {
	this.a = "a";
	this.b = [
		1,
		2,
		3
	];
	this.c = {};
	this.d = 1;
}

objf.prototype.f = function (a) {
	return this.d + a;
};

function newObjf() {
	return {
		a: "a",
		b: [
			1,
			2,
			3
		],
		c: {},
		d: 1,
		f: function (a) {
			return this.d + a;
		}
	};
}

function newObj2f() {
	const obj = {};
	obj.a = "a";
	obj.b = [
		1,
		2,
		3
	];
	obj.c = {};
	obj.d = 1;
	obj.f = function (a) {
		return this.d + a;
	};
	return obj;
}

class newObj3f {
	constructor() {
		this.a = "a";
		this.b = [
			1,
			2,
			3
		];
		this.c = {};
		this.d = 1;
	}

	f(a) {
		return this.d + a;
	}
}

/*
var o1 = new obj(), o2 = newObj(), o3 = newObj2();
console.log(o1.f(2), o2.f(2), o3.f(2));
*/
suite.add("new                ", function () {
	const o = new obj();
}).add("newObj             ", function () {
	const o = newObj();
}).add("newObj2            ", function () {
	const o = newObj2();
}).add("newObj3            ", function () {
	const o = new newObj3();
}).add("new with method    ", function () {
	const o = new objf();
}).add("newObj with method ", function () {
	const o = newObjf();
}).add("newObj2 with method", function () {
	const o = newObj2f();
}).add("newObj3 with method", function () {
	const o = new newObj3f();
}).add("new with method    ", function () {
	const o = new objf();
	o.f(2);
}).add("newObj with method ", function () {
	const o = newObjf();
	o.f(2);
}).add("newObj2 with method", function () {
	const o = newObj2f();
	o.f(2);
}).add("newObj3 with method", function () {
	const o = new newObj3f();
	o.f(2);
}).on("cycle", function (event) {
	console.log(String(event.target));
}).on("complete", function () {
	console.log("Fastest is " + this.filter("fastest").map("name"));
}).run({"async": true});