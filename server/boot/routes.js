module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/login', function(req, res) {
    app.models.user.login({
        email: 'ganga.chris@gmail.com',
        password: 'password'
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