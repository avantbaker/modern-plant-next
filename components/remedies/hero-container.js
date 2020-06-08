import React, { Fragment } from 'react';
import SplitHero from '../split-hero';
import HeroContent from '../hero-content';
import Button from '../button';

export default function RemediesHeroContainer() {
  return (
    <SplitHero
      overlay={
        <div className='hero-overlay'>
            <div className="hero-overlay__center-container hero-overlay__center-container--bottle">
                <img src='global/modern-bottle-white.png' alt='' className='responsive-img' />
            </div>
            <div className="hero-overlay__bottom-right-container">
                <div className="hero-overlay__button-container">
                    <Button type="secondary--white" text="Discover"/>
                </div>
            </div>
        </div>
      }
      contentLeft={
        <HeroContent
          type='remedies'
          content={
            <div className='hero-content__remedy-name'>
              <h1 className='hero-content__remedy-name__title heading-1 text-secondary'>
                Desert Sage
              </h1>
            </div>
          }
        />
      }
      contentRight={
        <HeroContent
          type='remedies-details'
          backgroundColor='color-secondary'
          content={
            <div className='hero-content__remedy-details'>
              <div className='hero-content__remedy-details__logo-container'>
                <img
                  src='global/mp-logo-mark-white.png'
                  alt='White Mark Logo'
                  className='hero-content__remedy-details__logo'
                />
              </div>
              <div className='attributes-box'>
                <div className='attributes-box__row'>
                  <div className='attributes-box__item heading-6--caps'>4 mL</div>
                  <div className='attributes-box__item heading-6--caps'>
                    Cleansing and Preventative Properties
                  </div>
                </div>
                <div className='attributes-box__row'>
                  <div className='attributes-box__item heading-6--caps'>Plant Based Supplement</div>
                  <div className='attributes-box__item heading-6--caps'>0.14 fl OZ</div>
                </div>
              </div>
            </div>
          }
        />
      }
    />
  );
}
