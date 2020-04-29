import * as React from 'react';
import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { cache, injectGlobal } from 'emotion';

injectGlobal`
    ${require('../scss/main.scss')}
`;

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className='app-container'>
        <CacheProvider value={cache}>
          <Component {...pageProps} />
        </CacheProvider>
      </div>
    );
  }
}
