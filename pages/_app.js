import * as React from 'react';
import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { cache, injectGlobal } from 'emotion';
import Header from '../components/header';
import Footer from '../components/footer';
import { PageTransition } from 'next-page-transitions'
import { motion, AnimatePresence } from "framer-motion"

injectGlobal`
  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 800ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 800ms;
  }
  ${require('../scss/main.scss')}
`;

export default class App extends NextApp {
  render() {
    const { Component, pageProps, router } = this.props;
    let className;

    if (router.route === '/remedies' || router.route.includes('remedies')) {
      className = 'header--light'
    }

    return (
      <div className='app-container'>
        <CacheProvider value={cache}>
          <Header className={className} />
          <PageTransition timeout={900} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
          </PageTransition>
          <Footer />
        </CacheProvider>
      </div>
    );
    
  }
}
