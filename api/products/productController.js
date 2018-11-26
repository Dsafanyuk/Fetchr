const express = require('express');

const router = express.Router();
const dbOptions = require('../db');
const knex = require('knex')(dbOptions);

// Make these functions available to the router
module.exports = {
  showAllProducts,
  showOneProduct,
  showItemByCategory,
};

// GET /products
function showAllProducts(req, res) {
  knex
    .raw(
      `
    select *, 'true' as 'is_favorite'
        from products
    having product_id in 
        (select product_id 
          from favorites 
        where user_id = ${req.body.user_id})
    UNION
    SELECT *, 'false' as 'is_favorite'
        FROM PRODUCTS
    having product_id not in 
        (select product_id 
          from favorites
        where user_id = ${req.body.user_id})`,
    )
    .then((products) => {
      res.json(products[0]).status(200);
    })
    .catch((err) => {
      res.status(500).json({
        message: `${err}`,
      }); // FOR DEBUGGING ONLY, dont json exact message in prod
    });
}

// GET /products/{product_id}
function showOneProduct(req, res) {
  knex('products')
    .where('product_id', req.params.product_id)
    .then((products) => {
      if (products.length == 0) {
        res.status(204).send('no item of this id');
      } else {
        res.status(200).json(products);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      }); // FOR DEBUGGING ONLY, dont json exact message in prod
    });
}

// GET /products/filter/{:category}
function showItemByCategory(req, res) {
  const category = req.params.category;
  sortParams = req.sortParams;
  const productOrderQuery = (queryBuilder, sortParams) => {
    if (sortParams) {
      queryBuilder.orderBy(`${sortParams.option}`, `${sortParams.orderBy}`);
    } else {
      queryBuilder.orderBy('total_sold', 'desc');
    }
  };
  knex('product_records')
    .where('category', category)
    .modify(productOrderQuery, sortParams)
    .then((products) => {
      if (products.length == 0) {
        res.status(204).json('no category of this id');
      } else {
        res.json(products).status(200);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      }); // FOR DEBUGGING ONLY, dont json exact message in prod
    });
}
