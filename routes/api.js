var express = require('express');
var router = express.Router();
var db = require('../db');
var faker = require('faker');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('API Root');
});

router.get('/users', function (req, res) {
  db
    .select()
    .from('users')
    .then(function(users) {
        res.status(200)
            .json(users);
    })
    .catch(function(error) {
        res.status(500)
            .send(error);
    });
});

router.get('/users/:id', function (req, res) {
   db('users')
    .where('id', req.params.id)
    .then(function(user) {
        res.status(200)
            .json(user);
    })
    .catch(function(error) {
        res.status(500)
            .send(error);
    })
});

router.post('/users', function(req, res) {
   var user = req.body;
   db
    .insert(user)
    .into('users')
    .then(function(result) {
       res
        .status(201)
        .json({
            message: 'User successfully created'
        });
   })
   .catch(function(error) {
       res
        .status(400)
        .json(error);
   });
});

module.exports = router
