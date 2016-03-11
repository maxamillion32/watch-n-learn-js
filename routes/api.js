var express = require('express');
var router = express.Router();
var db = require('../db');
var faker = require('faker');
var jwt = require('jsonwebtoken');


// Authenticate API users

router.post('/auth', function(req, res) {
    // find the user
    db('users')
        .where('email', req.body.email)
        .then(function(user) {
            if (user.length == 0) {
                res.json({success: false, message: 'Authentication failed. User not found.'});
            } else if (user.length > 1) {
                res.json({success: false, message: 'Something went wrong. Multiple accounts found'});
            } else {
                if (user[0].password != req.body.password) {
                    res.json({success: false, message: 'Invalid Password.'});
                } else {
                    var token = jwt.sign(user, process.env.SECRET, {
                        expiresInMinutes: 1440 //24 hours
                    });
                    
                    res.status(200)
                        .json({
                            success: true,
                            message: 'Authenticated Successfuly',
                            toke: token
                        });
                }
                
            }
        })
        .catch(function(error) {
            res.status(500)
                .send(error);
        });
})

router.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    
    //decode token
    if (token) {
        //verify 
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                res.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
                    success: false,
                    message: 'No token provided.'
                });
   }
});

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
   console.log(user);
   db
    .insert(user)
    .into('users')
    .then(function(result) {
       res
        .status(201)
        .json({
            success: true,
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
