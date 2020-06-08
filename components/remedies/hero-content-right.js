import React from 'react'
import HeroContent from '../hero-content';

export default function RemediesHeroContentRight() {
    return (
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
    )
}
