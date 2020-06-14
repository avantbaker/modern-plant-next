import Page from '@components/page';

import MethodsHeroContainer from '../components/methods/hero-container';
import MethodsInfoContainer from '../components/methods/methods-info';
import MethodsSubscriptionCards from '../components/methods/methods-subscription-cards';
import MethodsCalloutContainer from '../components/methods/methods-callout-container'
import MethodsStepCardsContainer from '../components/methods/methods-step-cards-container';
import FluidGallerySection from '../components/fluid-gallery-section';

export default function Methods() {
  return (
    <Page title="Methods">
      <MethodsHeroContainer />
      <MethodsInfoContainer />
      <MethodsSubscriptionCards />
      <MethodsCalloutContainer />
      <MethodsStepCardsContainer />
      <FluidGallerySection />
    </Page>
  );
}
