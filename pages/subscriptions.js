import React, { Fragment } from 'react';
import Head from 'next/head';
import SubscriptionsHeroContainer from '../components/subscriptions/subscriptions-hero-container'
import SubscriptionsCallout from '../components/subscriptions/subscribe-callout';
import SubscriptionsBlueBandSection from '../components/subscriptions/subscriptions-blue-band-section';
import SubscriptionsCardsContainer from '../components/subscriptions/subscriptions-cards-container';
import CalloutSection from '../components/callout-section';

export default function Subscriptions() {
  return (
    <Fragment>
      <Head>
        <title>Modern Plant - Subscriptions</title>
      </Head>
      <div className='page-container'>
        <SubscriptionsHeroContainer />
        <SubscriptionsCallout />
        <SubscriptionsBlueBandSection />
        <SubscriptionsCardsContainer />
        <CalloutSection 
            title={'Is this right for you?'}
            subtitle={"We can find out. Don't sleep on your DNA, let's find out what the right terpene blends are for you."}
            buttonText={'Learn More'}
            boxTitleText={'Live Radically Well'}
        />
      </div>
    </Fragment>
  );
}
