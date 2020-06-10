import React, { Fragment } from 'react';
import Head from 'next/head';
import MethodsHeroContainer from '../components/methods/hero-container';
import MethodsInfoContainer from '../components/methods/methods-info';
import MethodsSubscriptionCards from '../components/methods/methods-subscription-cards';
import MethodsCalloutContainer from '../components/methods/methods-callout-container'
import MethodsStepCardsContainer from '../components/methods/methods-step-cards-container';

export default function Methods() {
  return (
    <Fragment>
      <Head>
        <title>Modern Plant - Methods</title>
      </Head>
      <div className='page-container'>
        <MethodsHeroContainer />
        <MethodsInfoContainer />
        <MethodsSubscriptionCards />
        <MethodsCalloutContainer />
        <MethodsStepCardsContainer />
      </div>
    </Fragment>
  );
}
