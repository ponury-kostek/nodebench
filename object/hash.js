/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const object_hash = require('object-hash');
const node_object_hash = require('node-object-hash')({sort:true,coerce:false});
const crypto = require('crypto');

const obj = {"version":"1.1.0","id":1054,"result":{"_id":"58fdd142e2e9d03f9c09b892","doc":{"_id":"58fdd142e2e9d03f9c09b892","email":"info@redcart.pl","password":"66a0fee75749248bf98b20d0215bdb28c6fb3d949fbba3044cfc8d5181e835f2","database":{"host":"mdb.nextcommerce.io","port":"27017","name":"account_58fdd142e2e9d03f9c09b892"},"email_confirmed":true,"type":"pro","expires":{"$type":"Date","$value":"2018-04-24T10:29:08.903Z"},"last_seen":{"$type":"Date","$value":"2017-10-18T08:29:09.759Z"},"login_history":[{"date":{"$type":"Date","$value":"2017-10-18T08:29:09.759Z"},"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0","ip":"213.241.14.74"},{"date":{"$type":"Date","$value":"2017-10-09T11:08:03.824Z"},"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0","ip":"213.241.14.74"},{"date":{"$type":"Date","$value":"2017-10-05T15:04:50.511Z"},"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0","ip":"213.241.14.74"},{"date":{"$type":"Date","$value":"2017-10-04T08:14:06.716Z"},"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0","ip":"213.241.14.74"},{"date":{"$type":"Date","$value":"2017-10-03T15:00:23.567Z"},"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0","ip":"213.241.14.74"},{"date":{"$type":"Date","$value":"2017-10-03T08:12:57.791Z"},"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0","ip":"213.241.14.74"},{"date":{"$type":"Date","$value":"2017-10-02T10:49:41.722Z"},"user_agent":"Mozilla/5.0(Windows NT 10.0; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0","ip":"213.241.14.74"},{"date":{"$type":"Date","$value":"2017-09-29T13:52:39.159Z"},"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0","ip":"213.241.14.74"},{"date":{"$type":"Date","$value":"2017-09-27T13:39:06.827Z"},"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0","ip":"213.241.14.74"},{"date":{"$type":"Date","$value":"2017-09-26T11:07:45.961Z"},"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0","ip":"213.241.14.74"}],"stats":{"offers":35,"orders":103,"widgets":40},"utm":"","created_at":{"$type":"Date","$value":"2017-04-24T10:19:46.445Z"}}}};

suite.add('object_hash', function () {
	object_hash(obj);
}).add('node_object_hash', function () {
	node_object_hash.hash(obj);
}).add('hash json', function () {
	const hash = crypto.createHash('sha256');
	hash.update(JSON.stringify(obj));
	hash.digest('hex');
}).add('json', function () {
	JSON.stringify(obj);
}).on('cycle', function (event) {
	console.log(String(event.target));
}).on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async' : true});
