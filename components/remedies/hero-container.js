import SplitHero from '../split-hero';
import RemediesHeroOverlay from './hero-overlay';
import RemediesHeroContentLeft from './hero-content-left';
import RemediesHeroContentRight from './hero-content-right';

export default function RemediesHeroContainer() {
  return (
    <SplitHero
      overlay={<RemediesHeroOverlay />}
      contentLeft={<RemediesHeroContentLeft />}
      contentRight={<RemediesHeroContentRight />}
    />
  );
}
