const express = require('express');
const app = express();

// GET /products/all HTTP/1.1
app.get('/products/all', (request, response) => {
	response.send(
		'GET Products: ' + request.get('page') + ', ' + request.get('sort') + ', ' + request.get('order')
	);
});

// GET /products/8179 HTTP/1.1
app.get('/products/:8719', (request, response) => {
	response.send(
		'GET Products: ' + request.params[8719]
	);
});

// GET /products/8719-small-red HTTP/1.1
app.get('/products/:8719-:size-:color', (request, response) => {
	response.send(
		'GET Products: ' + request.params[8719] + ', ' + request.params.size + ', ' + request.params.color
	);
});


app.listen(3000);