import Page from '@components/page';

import RemedyDetailsHeroContainer from '../../components/remedies-details/hero-container';
import RemedyDetailsPurchasingContainer from '../../components/remedies-details/purchasing-container';
import RemediesDetailsCalloutContainer from '../../components/remedies-details/remedies-details-callout-container';

export default function Remedy() {
  return (
    <Page title='Remedy Details'>
      <RemedyDetailsHeroContainer />
      <RemedyDetailsPurchasingContainer />
      <RemediesDetailsCalloutContainer
        title={'Is this right for you?'}
        subtitle={
          "We can find out. Don't sleep on your DNA, let's find out what the right terpene blends are for you."
        }
        buttonText={'Learn More'}
        boxTitleText={'Live Radically Well'}
      />
    </Page>
  );
}
