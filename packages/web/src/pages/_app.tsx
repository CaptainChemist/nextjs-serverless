import React from 'react';
import App, { Container } from 'next/app';
import { MyProvider } from 'components/Provider';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router, apollo } = this.props;
    const { route } = router;
    console.log('this is the route');
    console.log(route);

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <MyProvider route={route}>
            <Component {...pageProps} />
          </MyProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
