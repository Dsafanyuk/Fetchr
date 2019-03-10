const knex = require('knex')(require('../db'));

function insertNewProduct(newProduct) {
  return knex('products').insert({
    product_name: newProduct.product_name,
    price: newProduct.price,
    category: newProduct.category,
    product_url: newProduct.product_url,
  });
}

module.exports = {
  insertNewProduct,
};
