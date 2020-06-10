import React, { Fragment } from 'react'
import Head from 'next/head'
import RemedyDetailsHeroContainer from '../../components/remedies-details/hero-container';
import RemedyDetailsPurchasingContainer from '../../components/remedies-details/purchasing-container';
import Button from '../../components/button';
import BoxTitle from '../../components/box-title';

export default function Remedy() {
    return (
        <Fragment>
            <Head>
                <title>Modern Plant - Remedies</title>
            </Head>
            <div className='page-container'>
                <RemedyDetailsHeroContainer />
                <RemedyDetailsPurchasingContainer />
                <div className="callout-setion container-fluid bg-color-secondary">
                    <div className="callout-section__container container _80">
                        <div className="callout-section__left">
                            <div className="heading-3 mb-sm text-color-white">Is this right for you?</div>
                            <div className="heading-5 mb-xxl text-color-white">We can find out. Don't sleep on your DNA, let's find out what the right terpene blends are for you.</div>
                            <Button text="Learn More" type="secondary--white"/>
                        </div>
                        <div className="callout-section__right">
                            <BoxTitle>Live Radically Well</BoxTitle>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
