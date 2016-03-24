module.exports = function(app) {
  var router = app.loopback.Router();
  router.post('/login', function(req, res) {
    console.log(req.body);
    app.models.user.login({
        email: req.body.email,
        password: req.body.password
    }, function(err, token) {
       if (err) {
           res.send(err);
           return;
       } 
       
       res.send(token);
    });
  });
  app.use(router);
};