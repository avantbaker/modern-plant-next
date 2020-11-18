import Page from '@components/page';
import { ALL_PRODUCTS_QUERY } from '../graphql';
import graphql from '../lib/graphql';
import SubscriptionsHeroContainer from '../components/subscriptions/subscriptions-hero-container';
import SubscriptionsCallout from '../components/subscriptions/subscribe-callout';
import SubscriptionsBlueBandSection from '../components/subscriptions/subscriptions-blue-band-section';
import SubscriptionsCardsContainer from '../components/subscriptions/subscriptions-cards-container';
import CalloutSection from '../components/callout-section';

export default function Subscriptions(props) {
	return (
		<Page titel="Subscriptions">
			<SubscriptionsHeroContainer />
			<SubscriptionsCallout />
			<SubscriptionsBlueBandSection />
			<SubscriptionsCardsContainer products={props.products} />
			<CalloutSection
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

export const getServerSideProps = async (ctx) => {
	const res = await graphql(ALL_PRODUCTS_QUERY, { first: 10 });

	return {
		props: {
			products: res?.data?.products ? res.data.products : null,
		},
	};
};
