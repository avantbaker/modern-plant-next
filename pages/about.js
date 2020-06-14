import Page from '@components/page';

import CalloutSection from '@components/callout-section';
import FluidGallerySection from '@components/fluid-gallery-section';
import InstagramGallery from '@components/home/grid-gallery-section';

import AboutHeroContainer from '@components/about/about-hero-container';
import AboutCalloutContainer from '@components/about/about-callout-container';
import AboutTeamContainer from '@components/about/about-team-container';
import AboutPartnersContainer from '@components/about/about-partners-container';
import AboutTestimonialsContainer from '@components/about/about-testimonials-container';

export default function About() {
  return (
    <Page title="About">
      <AboutHeroContainer />
      <AboutCalloutContainer />
      <AboutTeamContainer />
      <CalloutSection
        title={'Is this right for you?'}
        subtitle={
          "We can find out. Don't sleep on your DNA, let's find out what the right terpene blends are for you."
        }
        buttonText={'Learn More'}
        boxTitleText={'Live Radically Well'}
      />
      <AboutPartnersContainer />
      <FluidGallerySection />
      <AboutTestimonialsContainer />
      <InstagramGallery />
    </Page>
  );
}
