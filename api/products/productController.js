var express = require('express');
var router = express.Router();
var dbOptions = require("../db");
const knex = require("knex")(dbOptions);

// Make these functions available to the router
module.exports = {
    showAllProducts: showAllProducts,
    showOneProduct: showOneProduct,
    showItemByCategory: showItemByCategory
}


// GET /products
function showAllProducts(req, res) {
    knex('popular').orderBy('total_sold', 'desc')
        .then((products) => {
            res.json(products).status(200)
        })
        .catch(function (err) {
            console.error(err)
            // res.status(500).json({
            //     message: `${err}`
            // }) // FOR DEBUGGING ONLY, dont json exact message in prod
        })
}

// GET /product/{product_id}
function showOneProduct(req, res) {
    knex('products').where('product_id', req.params.product_id)
        .then((products) => {
            if (products.length == 0) {
                res.status(204).json('no item of this id')
            } else {
                res.status(200).json(products)
            }
        })
        .catch(function (err) {
            res.status(500).json({
                message: err
            }) // FOR DEBUGGING ONLY, dont json exact message in prod
        })
}

// GET /filter/{category}
function showItemByCategory(req, res) {
    sortParams = req.sortParams
    var productOrderQuery = function (queryBuilder, sortParams) {
        if (sortParams) {
            queryBuilder.orderBy(`${sortParams.option}`, `${sortParams.orderBy}`)
        } else {
            queryBuilder.orderBy(`total_sold`, `desc`)
        }
    };
    knex('popular').modify(productOrderQuery, sortParams)
        .then((products) => {
            if (products.length == 0) {
                res.status(204).json('no category of this id')
            } else {
                res.json(products).status(200)
            }
        })
        .catch(function (err) {
            res.status(500).json({
                message: err
            }) // FOR DEBUGGING ONLY, dont json exact message in prod
        })
}
