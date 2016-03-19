module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/auth', function(req, res) {
    res.send('auth');
  });
  app.use(router);
};