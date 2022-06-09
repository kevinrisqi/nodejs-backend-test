const restify = require('restify');
// const productRoute = require('./routes/productRoute');
const product = require('./controllers/Product');

const server = restify.createServer({
  name: 'test-backend',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/product', product.getProduct)

// server.get('/test/:name', function (req, res, next) {
//   res.send(req.params);
//   return next();
// });


server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});