const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(auth);
server.use(cors());
server.use(router);

server.listen(port);
