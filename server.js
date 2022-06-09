require('dotenv').config()
const restify = require('restify');
const product = require('./controllers/Product');
const user = require('./controllers/User');

const server = restify.createServer({
  name: 'test-backend',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/posts', user.authenticationToken)
server.post('/login', user.login)

server.get('/product', product.getProduct)


server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});