import * as React from 'react';
import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { cache, injectGlobal } from 'emotion';
import Header from '../components/header';
import Footer from '../components/footer';

injectGlobal`
    ${require('../scss/main.scss')}
`;

export default class App extends NextApp {
  render() {
    const { Component, pageProps, router } = this.props;
    let className;
    if (router.route === '/remedies') {
      className = 'header--light'
    }
    return (
      <div className='app-container'>
        <CacheProvider value={cache}>
          <Header className={className} />
          <Component {...pageProps} />
          <Footer />
        </CacheProvider>
      </div>
    );
  }
}
