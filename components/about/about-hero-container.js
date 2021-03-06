import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background';
import HeroContent from '@components/hero-content';

const AboutHeroContainer = () => {
	return (
		<SplitHero
			contentLeft={<HeroBackground src="/images/updates/regularwellness.jpg" />}
			contentRight={
				<HeroContent
					title="Bold Purveyors of Wellness"
					paragraph="Traditional apothecary remedies, refined - and with a modern spin"
				/>
			}
		/>
	);
};

export default AboutHeroContainer;
