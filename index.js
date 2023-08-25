const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const productRouter = require('./asl_project/routes/products');
app.set('views', __dirname + '/templates');
app.set('view engine', 'twig');
app.use("/products", productRouter);
app.get('/', (req, res) => {
	res.render("home", {
		name: 'World!', 'users': [
			{ name: 'Brandin Sjolander', email: 'bsjolander@gmail.com' },
			{ name: 'Alyssa Sjolander', email: 'asjolander@gmail.com' },
			{ name: 'Ham Sjolander', email: 'hsjolander@gmail.com' },
		]
	});
})


app.listen(3000);
