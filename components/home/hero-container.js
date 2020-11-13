import React from 'react';
import SplitHero from '@components/split-hero';
import HeroContent from '@components/hero-content';
import HeroBackground from '@components/hero-background';

export default function HomeHeroContainer() {
	return (
		<SplitHero
			contentLeft={<HeroBackground src={require('@images/updates/eyeinleaves.jpg')} />}
			contentRight={
				<HeroContent
					title="Optimize Immunity &amp; Energy"
					subtitle="Terpene Remedies that will change your health!"
					paragraph="Traditional apothecary remedies, refined- and with a modern spin."
					buttonText="Learn More"
				/>
			}
		/>
	);
}
