import React from 'react'
import SplitHero from '../split-hero';
import HeroBackground from '../hero-background';
import HeroContent from '../hero-content';

export default function MethodsHeroContainer() {
    return (
        <SplitHero
          contentLeft={<HeroBackground src='/subscriptions/curology-girl.png' />}
          contentRight={
            <HeroContent
              title='Regular Wellness'
              subtitle='Lorem ipsum dolor sic amet'
              paragraph='DNA is personal and so is your health. Subscribe to your headl and wellness.'
            />
          }
        />
    )
}
