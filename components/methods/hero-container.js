import React from 'react'
import SplitHero from '../split-hero';
import HeroBackground from '../hero-background';
import HeroContent from '../hero-content';

export default function MethodsHeroContainer() {
    return (
        <SplitHero
          contentLeft={<HeroBackground src='/images/methods/plants-in-beaker.png' />}
          contentRight={
            <HeroContent
              title='Modern Methods'
              subtitle='Why Terpenes'
              paragraph='When ingesting the terpenes in our Modern Plant cocktail you take on a plants defense system and make it your own.'
            />
          }
        />
    )
}
