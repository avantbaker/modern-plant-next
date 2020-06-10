import React, { Fragment } from 'react'
import Head from 'next/head'
import RemedyDetailsHeroContainer from '../../components/remedies-details/hero-container';
import RemedyDetailsPurchasingContainer from '../../components/remedies-details/purchasing-container';
import RemediesDetailsCalloutContainer from '../../components/remedies-details/remedies-details-callout-container';

export default function Remedy() {
    return (
        <Fragment>
            <Head>
                <title>Modern Plant - Remedies</title>
            </Head>
            <div className='page-container'>
                <RemedyDetailsHeroContainer />
                <RemedyDetailsPurchasingContainer />
                <RemediesDetailsCalloutContainer 
                    title={'Is this right for you?'}
                    subtitle={"We can find out. Don't sleep on your DNA, let's find out what the right terpene blends are for you."}
                    buttonText={'Learn More'}
                    boxTitleText={'Live Radically Well'}
                />
            </div>
        </Fragment>
    )
}
