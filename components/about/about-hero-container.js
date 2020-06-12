import SplitHero from '@components/split-hero';
import HeroBackground from '@components/split-hero';
import HeroContent from '@components/split-hero';

const AboutHeroContainer = () => {
  return (
    <SplitHero
      contentLeft={<HeroBackground src='/images/about/sink.png' />}
      contentRight={<HeroContent title='Bold Purveyors of Wellness' />}
    />
  );
};

export default AboutHeroContainer;
