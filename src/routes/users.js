const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Order = require('../models/order');

import stripePackage from 'stripe';
const stripe = stripePackage('sk_test_GlILFM0zddXKOnitZXjcihal');

// Register
router.post('/register', (req, res, next) => {

  stripe.customers.create({
    email: req.body.email
  }).then( (customer) => {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      orders: [],
      stripe_customerid: customer.id,
      credits: 15
    });

    User.addUser(newUser, (err, user) => {
      if(err){
        res.json({success: false, msg:'Failed to register user'});
      } else {
        res.json({success: true, msg:'User registered'});
      }

    });
  }).catch( () => {
    res.json({success: false, msg:'Failed to register user'});
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            orders: [],
            credits: user.credits
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

router.post('/orders', passport.authenticate('jwt', {session:false}), (req, res, next) => {

  let newOrder = new Order({
    name: req.body.name,
    userid: req.user._id,
    price: req.body.price,
    exp_month: req.body.exp_month,
    exp_year: req.body.exp_year,
    number: req.body.number,
    cvc: req.body.cvc
  });

  newOrder.validate( (err, order) => {
    if(err){
      res.json({success: false, msg:'Failed to process order'});
    }
    else {
      stripe.customers.retrieve(req.user.stripe_customerid, (err, customer) => {
        if(err) {
          res.json({success: false, msg:'Stripe not retrive'});
        }
        else {
          stripe.customers.createSource(customer.id, {
            source: {
               object: 'card',
               exp_month: req.body.exp_month,
               exp_year: req.body.exp_year,
               number: req.body.number,
               cvc: req.body.cvc
            }
          }, (err, card) => {
            stripe.charges.create({
              amount: req.body.price,
              currency: 'usd',
              customer: customer.id
            }, (err, charges) => {

              Order.addOrder(newOrder, (err, order) => {
                if(err){
                  res.json({success: false, msg:'Failed to process order'});
                } else {
                  User.findOneAndUpdate(
                    {
                      "_id": req.user._id
                    }, {
                      "$push": {
                        "orders": order
                      }
                    }, (err, user) => {
                      res.json(order);
                    })
                }

              })
              
            } );
            
          });


          
        }

      })
      
    }

  });

});

module.exports = router;
