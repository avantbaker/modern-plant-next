import React, { Fragment } from 'react'
import Head from 'next/head'
import RemedyDetailsHeroContainer from '../../components/remedies-details/hero-container';

export default function Remedy() {
    return (
        <Fragment>
            <Head>
                <title>Modern Plant - Remedies</title>
            </Head>
            <div className='page-container'>
                <RemedyDetailsHeroContainer />
            </div>
        </Fragment>
    )
}
