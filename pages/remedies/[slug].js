import Page from '@components/page';

import RemedyDetailsHeroContainer from '../../components/remedies-details/hero-container';
import RemedyDetailsPurchasingContainer from '../../components/remedies-details/purchasing-container';
import RemediesDetailsCalloutContainer from '../../components/remedies-details/remedies-details-callout-container';
import { CHECKOUT_QUERY, PRODUCT_QUERY } from '../../graphql';
import graphql from '../../lib/graphql';

export default function Remedy({ product }) {

  return (
    <Page title='Remedy Details'>
      <RemedyDetailsHeroContainer {...product} />
      <RemedyDetailsPurchasingContainer {...product} />
      <RemediesDetailsCalloutContainer
        title={'Is this right for you?'}
        subtitle={
          "We can find out. Don't sleep on your DNA, let's find out what the right terpene blends are for you."
        }
        buttonText={'Learn More'}
        boxTitleText={'Live Radically Well'}
        {...product}
      />
    </Page>
  );
}

export const getServerSideProps = async (ctx) => {
  const product = await graphql(PRODUCT_QUERY, { id: ctx.query.slug });
  
  return {
    props: {
      product: product && product.data && product.data.node,
    }
  };
};
