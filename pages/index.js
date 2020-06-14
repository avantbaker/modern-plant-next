/** @jsx jsx */
import { jsx } from '@emotion/core';
import HomeHeroContainer from '../components/home/hero-container';
import HomeIntroInfoContainer from '../components/home/info-intro-container';
import HomeDualCardsContainer from '../components/home/dual-cards-container';
import HomeBackgroundCalloutContainer from '../components/home/background-callout-container'; 
import HomeGridGallerySection from '../components/home/grid-gallery-section';
import HomeBlogSliderContainer from '../components/home/blog-slider';
import Page from '@components/page';

export default function App() {
  return (
    <Page title="Home">
      <HomeHeroContainer />
      <HomeIntroInfoContainer />
      <HomeDualCardsContainer />
      <HomeBackgroundCalloutContainer />
      <HomeGridGallerySection />
      <HomeBlogSliderContainer />
    </Page>
  );
}
