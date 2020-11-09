import React from 'react';
import SplitHero from '../split-hero';
import HeroBackground from '../hero-background';
import HeroContent from '../hero-content';

export default function MethodsHeroContainer() {
	return (
		<SplitHero
			contentLeft={<HeroBackground src="/images/methods/plants-in-beaker.png" />}
			contentRight={
				<HeroContent
					title="Modern Methods"
					subtitle="Why Terpenes?"
					paragraph="Terpenes used in our Modern Plant Blends have therapeutic and medicinal properties to heal,
              dissolve pain, and boost your mood."
				/>
			}
		/>
	);
}
