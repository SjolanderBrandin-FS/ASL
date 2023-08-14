const Products = require('../models/products')

const index = (req, res) => {
    const products = Products.all()
    res.json(products);
}
const form = (req, res) => {
    res.send('products.form');
}
const show = (req, res) => {
    const product = Products.locate(req.params.id)
    res.json(product);
}
const create = (req, res) => {
    const product = Products.create(req.body)
    res.json(product);
}
const update = (req, res) => {
    const product = Products.update(req.params.id, req.body)
    res.json(product)
}
const remove = (req, res) => {
    const products = Products.remove(req.params.id)
    res.json(products)
}
module.exports = { index, form, show, create, update, remove }