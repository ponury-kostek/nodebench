/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
const http = require('http');
const server = http.createServer((req, res) => {
	res.end('ok');
}).listen(3000);