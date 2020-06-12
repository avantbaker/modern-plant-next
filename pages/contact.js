import React, { Fragment } from 'react';
import Head from 'next/head';

import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background'
import Input from '@components/input'
import Button from '@components/button'

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Modern Plant - Contact</title>
      </Head>
      <div className='page-container'>
        <SplitHero 
            contentLeft={<HeroBackground src='/images/contact/guybehindleaf.png' />}
            contentRight={
                <div className="contact-form">
                    <div className="contact-form__form">
                        <h1 className="contact-form__title heading-1 mb-xxl">Contact</h1>
                        <div className="contact-form__fields">
                            <Input className="contact-form__field mb-lg" placeholder="Name" />
                            <Input className="contact-form__field mb-lg" placeholder="Email" />
                            <Input className="contact-form__field mb-lg" placeholder="Subject" />
                            <Input className="contact-form__field mb-lg" placeholder="Message" type="textarea" />
                            <Button text="Send" />
                        </div>
                    </div>
                </div>
            }
        />
      </div>
    </Fragment>
  );
}
