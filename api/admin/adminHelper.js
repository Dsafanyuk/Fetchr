const knex = require('knex')(require('../db'));

function insertNewProduct(newProduct) {
  return knex('products').insert({
    product_name: newProduct.product_name,
    price: newProduct.price,
    category: newProduct.category,
    product_url: newProduct.product_url,
  });
}
function updateProduct(product) {
  return knex('products')
    .select('*')
    .where('product_id', product.product_id)
    .then((results) => {
      if (results.length) {
        knex('products')
          .where('product_id', product.product_id)
          .update({
            product_name: product.product_name,
            price: product.price,
            category: product.category,
            is_active: product.is_active,
            product_url: product.product_url,
          })
          .then(success => success)
          .catch(err => err);
      } else {
        throw new Error('No products exist');
      }
    });
}

module.exports = {
  insertNewProduct,
  updateProduct,
};
