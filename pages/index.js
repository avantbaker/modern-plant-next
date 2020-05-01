/** @jsx jsx */
import Head from 'next/head';
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import SplitHero from '../components/split-hero';
import HeroContent from '../components/hero-content';
import BlueBandSection from '../components/blue-band-section';
import SectionContent from '../components/section-content';
import HeroBackground from '../components/hero-background';

export default function App() {
  return (
    <Fragment>
      <Head>
        <title>Modern Plant</title>
      </Head>
      <div className='page-container'>
        <SplitHero
          contentLeft={<HeroBackground src="global/curology.png" />}
          contentRight={
            <HeroContent
              title='Terpene Remedies'
              subtitle='Look After Yourself'
              paragraph='Traditional apothecary remedies, refined- and with a modern spin.'
              buttonText='Learn More'
            />
          }
        />
        <BlueBandSection>
          <div className='container _80'>
            <div className='row'>
              <div className='col-md-6'>
                <SectionContent />
              </div>
              <div className='col-md-6 relative w-100'>
                <div className='bottle-images'>
                  <div className='bottle-images__image-wrapper bottle-images__image-wrapper--top-right'>
                    <img src='global/modern-bottle-white.png' alt='' className='responsive-img' />
                  </div>
                  <div className='bottle-images__image-wrapper bottle-images__image-wrapper--bottom-left'>
                    <img src='global/modern-bottle-white.png' alt='' className='responsive-img' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlueBandSection>
      </div>
    </Fragment>
  );
}
