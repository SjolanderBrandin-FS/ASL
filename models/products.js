let products = [
    { id: "1", "slug": "nike-shoe", "name": "Nike Shoe" }
]

const all = () => {
    return products
}

const locate = (id) => {
    return products.find(p => p.id === id)
}

const create = (product) => {
    const id = Number(products[products.length - 1].id) + 1 + ""
    products.push({ id, ...product })
    return products[products.length - 1]
}

const update = (id, product) => {
    product = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return product
}

const remove = (id) => {
    product = products.filter(p => p.id !== id)
    return product
}

module.exports = { all, locate, create, update, remove }