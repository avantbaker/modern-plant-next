import * as React from 'react';
import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { cache, injectGlobal } from 'emotion';
import Header from '../components/header';
import Footer from '../components/footer';
import { AnimatePresence } from "framer-motion"

injectGlobal`
  ${require('../scss/main.scss')}
`;

export default class App extends NextApp {

  render() {

    const { Component, pageProps, router } = this.props;
    let className;
    const isRemedies = router.route === '/remedies';
    const isRemediesDetails = router.route.includes('remedies');
    const isContact = router.route === '/contact';

    const isLightRoute = (isRemedies || router.route.includes('remedies')) ||
    router.route === '/' || 
    router.route === '/subscriptions' || 
    router.route === '/contact' ||
    router.route === '/about';
    
    if (isLightRoute) {
      className = 'header--light'
      if (isRemedies) {
        className = className + ' page-remedies';
      }
      if (isRemediesDetails) {
        className = className + ' page-remedy-details';
      }
      if (isContact) {
        className = className + ' page-contact';
      }
    }
  
    if (router.route === '/mobile-navigation') {
      className = 'mobile-nav'
    }

    return (
      <div className='app-container'>
        <CacheProvider value={cache}>
          <Header className={className} />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Footer />
        </CacheProvider>
      </div>
    );
    
  }
}
