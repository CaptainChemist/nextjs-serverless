import * as express from 'express';
import * as next from 'next';
const { ApolloServer, gql } = require('apollo-server-express');
var cors = require('cors');

// const sitemapAndRobots = require('./sitemapAndRobots');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './src' });
const handle = app.getRequestHandler();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
};
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

const startServer = async () => {
  await app.prepare();
  const server = express();

  // sitemapAndRobots({ server });
  // server.use(cors('*'));
  apolloServer.applyMiddleware({ app: server, path: '/graphql' });

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.params);
  });

  server.get('*', (req, res) => {
    console.log('#### * ####');
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
};

startServer();
