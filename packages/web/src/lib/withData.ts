import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
// import { endpoint, prodEndpoint } from '../config';
// import { LOCAL_STATE_QUERY } from '../components/Cart';

function createClient({ headers }) {
  return new ApolloClient({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://2ju58qm309.execute-api.us-east-1.amazonaws.com/staging/graphql'
        : 'http://localhost:3000/graphql',
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      });
    }
    // local data
    // clientState: {
    //   resolvers: {
    //     Mutation: {
    //       //   toggleCart(_, variables, { cache }) {
    //       //     // read the cartOpen value from the cache
    //       //     const { cartOpen } = cache.readQuery({
    //       //       query: LOCAL_STATE_QUERY,
    //       //     });
    //       //     // Write the cart State to the opposite
    //       //     const data = {
    //       //       data: { cartOpen: !cartOpen },
    //       //     };
    //       //     cache.writeData(data);
    //       //     return data;
    //       //   },
    //       // },
    //     },
    //     defaults: {
    //       // cartOpen: false,
    //     }
    //   }
    // }
  });
}

export default withApollo(createClient);
