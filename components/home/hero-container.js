import React from 'react'
import SplitHero from '@components/split-hero';
import HeroContent from '@components/hero-content';
import HeroBackground from '@components/hero-background';
const curology = require('@images/global/curology.png?webp');

export default function HomeHeroContainer() {
    return (
        <SplitHero
          contentLeft={<HeroBackground src={curology} />}
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
