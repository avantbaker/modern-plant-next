import React, { Fragment } from 'react'
import Head from 'next/head';
import RemediesHeroContainer from '../../components/remedies/hero-container';

export default function Remedies() {
    return (
        <Fragment>
            <Head>
                <title>Modern Plant - Remedies</title>
            </Head>
            <div className='page-container'>
                <RemediesHeroContainer />
            </div>
        </Fragment>
    )
}
