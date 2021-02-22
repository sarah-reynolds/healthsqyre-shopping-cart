'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const productData = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/products', (req, res) => {
  return res.json(productData.DATA);
});

app.post('/api/products', (req, res) => {
  let products = [], id = null;
  let cart = JSON.parse(req.body.cart);
  if (!cart) return res.json(products)
  for (let product of productData.DATA){
    id = product.id.toString();
    if (cart.hasOwnProperty(id)) {
      product.qty = cart[id]
      products.push(product);
    }
  }
  return res.json(products);
});

const PORT = 5000;

app.listen(PORT);
console.log('api running on port ' + PORT + ': ');