import Page from '@components/page';
import { ALL_PRODUCTS_QUERY } from '../graphql';
import graphql from '../lib/graphql';

import MethodsHeroContainer from '../components/methods/hero-container';
import MethodsInfoContainer from '../components/methods/methods-info';
import MethodsSubscriptionCards from '../components/methods/methods-subscription-cards';
import MethodsCalloutContainer from '../components/methods/methods-callout-container';
import MethodsStepCardsContainer from '../components/methods/methods-step-cards-container';
import FluidGallerySection from '../components/fluid-gallery-section';

export default function Methods(props) {
	return (
		<Page title="Methods">
			<MethodsHeroContainer />
			<MethodsInfoContainer />
			<MethodsSubscriptionCards products={props.products} />
			<MethodsCalloutContainer />
			<MethodsStepCardsContainer />
			{/* <FluidGallerySection /> */}
		</Page>
	);
}

export const getServerSideProps = async (ctx) => {
	const res = await graphql(ALL_PRODUCTS_QUERY, { first: 10 });

	return {
		props: {
			products: res?.data?.products ? res.data.products : null,
		},
	};
};
