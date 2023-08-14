const express = require('express');
const app = express();

// GET / HTTP/1.1

app.get('/', (request, response) => {
	response.send('Home page, GET....');
});
// POST
app.post('/', (request, response) => {
	response.send('Home page, Post...');
});



// GET /product/nike-large-white-shoe HTTP/1.1
app.get('/products/:productName', (request, response) => {
	response.send('Product Page! Product Name: ' + request.params.productName);
});


app.listen(3000);
