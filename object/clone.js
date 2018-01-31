/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
const fast =require('fast.js');
const obj = {
	"_id": "58fdd142e2e9d03f9c09b892",
	"email": "info@redcart.pl",
	"password": "66a0fee75749248bf98b20d0215bdb28c6fb3d949fbba3044cfc8d5181e835f2",
	"database": {
		"host": "mdb.nextcommerce.io",
		"port": "27017",
		"name": "account_58fdd142e2e9d03f9c09b892"
	},
	"email_confirmed": true,
	"type": "pro",
	"expires": {
		"$type": "Date",
		"$value": "2018-04-24T10:29:08.903Z"
	},
	"last_seen": {
		"$type": "Date",
		"$value": "2017-10-18T08:29:09.759Z"
	},
	"login_history": [

	],
	"stats": {
		"offers": 35,
		"orders": 103,
		"widgets": 40
	},
	"utm": "",
	"created_at": {
		"$type": "Date",
		"$value": "2017-04-24T10:19:46.445Z"
	}

};
suite.add("destruction", function () {
	const {...copy} = obj;
}).add("destruction", function () {
	const copy = {...obj};
}).add("Object.assign", function () {
	const copy = Object.assign({}, obj);
}).add("fast.js assign", function () {
	const copy = fast.object.assign({}, obj);
}).add("fast.js clone", function () {
	const copy = fast.object.clone(obj);
}).on("cycle", function (event) {
	console.log(String(event.target));
}).on("complete", function () {
	console.log("Fastest is " + this.filter("fastest").map("name"));
}).run({"async": true});
