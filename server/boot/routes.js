module.exports = function(app) {
  var router = app.loopback.Router();
  router.post('/login', function(req, res) {
    app.models.user.login({
        email: req.body.email,
        password: req.body.password
    }, function(err, token) {
       if (err) {
           res.send(err);
           return;
       }

       app.models.user.findOne({id: token.user_id}, function(error, user) {
         if (!error) {
           delete user.password;
           var response = {
              token: token,
              user: user,
            };

          res.send(response);
         }
       });
    });
  });
  app.use(router);
};