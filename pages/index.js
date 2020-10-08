/** @jsx jsx */
import { jsx } from '@emotion/core';
// import dotenv from 'dotenv';
import Client from 'shopify-buy';
import HomeHeroContainer from '../components/home/hero-container';
import HomeIntroInfoContainer from '../components/home/info-intro-container';
import HomeDualCardsContainer from '../components/home/dual-cards-container';
import HomeBackgroundCalloutContainer from '../components/home/background-callout-container'; 
import HomeGridGallerySection from '../components/home/grid-gallery-section';
import HomeBlogSliderContainer from '../components/home/blog-slider';
import Page from '@components/page';

// dotenv.config({ path: '.env' });

// create Shopify client
const client = Client.buildClient({
  storefrontAccessToken: '35fa9bad6d086437b000b2e90a8611f0',
  domain: 'themodernplant.myshopify.com',
})

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
