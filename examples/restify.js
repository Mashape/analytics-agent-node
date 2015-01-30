var restify = require('restify');
var analytics = require('apianalytics')

var server = restify.createServer();

server.use(analytics('SERVICE_TOKEN'));

server.get('/api', function (req, res, next) {
  res.send('Hello World!');
  next();
});

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
