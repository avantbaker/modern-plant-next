import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background';
import HeroContent from '@components/hero-content';

const AboutHeroContainer = () => {
  return (
    <SplitHero
      contentLeft={<HeroBackground src='/images/about/sink.png' />}
      contentRight={<HeroContent title='Bold Purveyors of Wellness' />}
    />
  );
};

export default AboutHeroContainer;
