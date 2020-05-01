import React from 'react'
import SplitHero from '../split-hero';
import HeroContent from '../hero-content';
import HeroBackground from '../hero-background';

export default function HomeHeroContainer() {
    return (
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
    )
}
