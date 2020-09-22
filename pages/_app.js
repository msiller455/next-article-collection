import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import React from 'react';

import withApolloClient from '../apollo/client';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);