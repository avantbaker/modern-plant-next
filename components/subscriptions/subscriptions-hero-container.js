import React from 'react';
import SplitHero from '../split-hero';
import HeroBackground from '../hero-background';
import HeroContent from '../hero-content';

export default function MethodsHeroContainer() {
	return (
		<SplitHero
			contentLeft={<HeroBackground src="/images/subscriptions/curology-girl.png" />}
			contentRight={
				<HeroContent
					title="Wellness Year Round"
					subtitle="Your Future Self thanks you"
					paragraph="Terpenes possess very important antiviral compounds that offer a number of health
              benefits that fight off many common illnesses such as cold, flu, stomach issues, and more. Now
              you can maintain a healthy self all year round with our monthly subscription!"
				/>
			}
		/>
	);
}
