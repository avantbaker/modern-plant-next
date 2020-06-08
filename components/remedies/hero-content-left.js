import React from 'react'
import HeroContent from '../hero-content';

export default function RemediesHeroContentLeft({
    title = '',
    color = 'primary'
}) {
    return (
        <HeroContent
          type='remedies'
          content={
            <div className='hero-content__remedy-name'>
              <h1 className={`hero-content__remedy-name__title heading-1 text-${color}`}>
                {title}
              </h1>
            </div>
          }
        />
    )
}
