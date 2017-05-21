const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const OrdersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  exp_month: {
    type: Number,
    required: true
  },
  exp_year: {
    type: Number,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  cvc: {
    type: Number,
    required: true
  }


});

const Order = module.exports = mongoose.model('Order', OrdersSchema);

module.exports.getOrderById = function(id, callback){
  Order.findById(id, callback);
}

module.exports.addOrder = function(newOrder, callback){
  newOrder.save(callback);
}

