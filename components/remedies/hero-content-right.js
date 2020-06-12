import React from 'react'
import HeroContent from '../hero-content';
import AttributesBox from '../attributes-box';

export default function RemediesHeroContentRight({
    backgroundColor = ''
}) {
    return (
        <HeroContent
          type='remedies-details'
          backgroundColor={backgroundColor}
          content={
            <div className='hero-content__remedy-details'>
              <div className='hero-content__remedy-details__logo-container'>
                <img
                  src='/images/global/mp-logo-mark-white.png'
                  alt='White Mark Logo'
                  className='hero-content__remedy-details__logo'
                />
              </div>
              <AttributesBox />
            </div>
          }
        />
    )
}
