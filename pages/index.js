/** @jsx jsx */
import Head from 'next/head';
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import HomeHeroContainer from '../components/home/hero-container';
import HomeIntroInfoContainer from '../components/home/info-intro-container';

export default function App() {
  return (
    <Fragment>
      <Head>
        <title>Modern Plant</title>
      </Head>
      <div className='page-container'>
        <HomeHeroContainer />
        <HomeIntroInfoContainer />
      </div>
    </Fragment>
  );
}
