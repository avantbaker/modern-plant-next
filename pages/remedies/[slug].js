import Page from '@components/page';

import RemedyDetailsHeroContainer from '../../components/remedies-details/hero-container';
import RemedyDetailsPurchasingContainer from '../../components/remedies-details/purchasing-container';
import RemediesDetailsCalloutContainer from '../../components/remedies-details/remedies-details-callout-container';
import { PRODUCT_QUERY } from '../../graphql';
import graphql from '../../lib/graphql';

const details = [
	{
		type: 'cherry wine',
		subtitle: 'Say Goodbye To Sickness',
		description: `Our Cherry Wine Blend has amazing anti-inflammatory properties, and it can even help out
    when fighting off anti-viral conditions like asthma, flu, the common cold.
    Locally sourced from plant materials from Tera Growth in Ventura, CA (one of the most respected and
    sought after hemp farms in the US). Our blends are USDA approved and are of the highest quality.`,
	},
	{
		type: 'desert sage',
		subtitle: 'Set The Mood. Ease Your Mind and Body',
		description: `
      Enhance your ability to stay calm with our Desert Sage Blend. This blend is meant to elevate
      and alleviate your mind and body.

      When using the Desert Sage Blend, it helps fire and interact with different receptors in our brains which
      helps us relax, energize, and overall feel more positive.
      
      Our sage based terp blend is locally grown and sourced in California. Native Americans have been using
      sage for its healing properties for centuries. We’ve incorporated the old healing methods with the new
      and created this beautifully blended terpene cocktail.
    `,
	},
	{
		type: 'holy lavender',
		// subtitle: '',
		// description: '',
	},
	{
		type: 'custom blend',
		subtitle: 'Self Care At Its Best',
		description: `
      Modern Methods That Can Meet All Your Needs.
      Whether you’re looking to enhance calm and stress relief, focus (boost cognitive function and memory),
      or get a relaxation heavy-hitter (muscle relaxation and slower heart rate) Modern Plant can find the
      custom solutions just for you based on your genome to target your health goals.
    `,
	},
];

const purchasing = [
	{
		type: 'cherry wine',
		subtitle: 'Support Your Immune System.',
		description: `Stick it to being sick. Fight off anti-viral conditions like asthma, the flu, and the common cold
    with our Cherry Wine Blend. Our body’s attempt to fight cold and flu viruses automatically causes
    inflammation in the throat, sinuses, nose, and lungs. This blend has anti-inflammatory properties that
    can drive down inflammation all around the body and relieve your symptoms like a runny or congested
    nose.
    Locally sourced from plant materials from Tera Growth in Ventura, CA (one of the most respected and
    sought after hemp farms in the US). Our blends are USDA approved and are of the highest quality.`,
	},
	{
		type: 'desert sage',
		subtitle: 'Your Desert Sage Terpenes',
		description: `The plant material sourced in this blend is locally sourced from Tera Growth in Ventura, CA from the one most respected and sought after hemps farms in the US. They are USDA approved and of the highest quality`,
	},
	{
		type: 'holy lavender',
		subtitle: 'Your Holy Lavender Terpenes',
		description: `The plant material sourced in this blend is locally sourced from Tera Growth in Ventura, CA from the one most respected and sought after hemps farms in the US. They are USDA approved and of the highest quality`,
	},
	{
		type: 'custom blend',
		subtitle: 'Your Holy Lavender Terpenes',
		description: `The plant material sourced in this blend is locally sourced from Tera Growth in Ventura, CA from the one most respected and sought after hemps farms in the US. They are USDA approved and of the highest quality`,
	},
];

let remedies = [
	{
		title: 'Desert Sage',
		color: 'color-secondary',
		slug: 'desert-sage',
		attributes: {},
		image: '/images/updates/desertsage.jpg',
	},
	{
		title: 'Cherry Wine',
		color: 'color-tertiary',
		slug: 'cherry-wine',
		attributes: {
			description: 'Decreases inflammation and anti-viral conditions',
		},
		image: '/images/updates/prettygreen.jpg',
	},
	{
		title: 'Holy Lavender',
		color: 'color-primary',
		slug: 'holy-lavender',
		attributes: {},
		image: '/images/updates/lavender.jpg',
	},
	{
		title: 'Custom Blend',
		color: 'color-quartenary',
		slug: 'custom-blend',
		attributes: {},
		image: '/images/updates/planthedges.jpg',
	},
];
function getImage(product) {
	return remedies.reduce((acc, cv) => {
		if (product.title.toLowerCase() === cv.title.toLowerCase()) {
			acc = cv.image;
		}
		return acc;
	}, '');
}
function getColor(product) {
	return remedies.reduce((acc, cv) => {
		if (product.title.toLowerCase() === cv.title.toLowerCase()) {
			acc = cv.color;
		}
		return acc;
	}, '');
}

function getPurchasing(product) {
	return purchasing.reduce((acc, cv) => {
		if (product.title.toLowerCase() === cv.type) {
			acc = cv;
		}
		return acc;
	}, {});
}
function getAttributes(product) {
	const attributes = remedies.reduce((acc, cv) => {
		if (product.title.toLowerCase() === cv.title.toLowerCase()) {
			acc = cv.attributes;
		}
		return acc;
	}, {});
	return attributes;
}

function getDetails(product) {
	return details.reduce((acc, cv) => {
		if (product.title.toLowerCase() === cv.type) {
			acc = cv;
		}
		return acc;
	}, {});
}

export default function Remedy({ product }) {
	return (
		<Page title="Remedy Details">
			<RemedyDetailsHeroContainer
				{...product}
				details={getDetails(product)}
				attributes={getAttributes(product)}
				image={getImage(product)}
				color={getColor(product)}
			/>
			<RemedyDetailsPurchasingContainer details={getPurchasing(product)} {...product} />
			<RemediesDetailsCalloutContainer
				{...product}
				title={`${product.title} Remedy`}
				subtitle={
					'Kick the sickness and find the cure to all of your antiviral symptoms.'
				}
				buttonText={'Buy Now'}
				boxTitleText={'Live Radically Well'}
				handle={getColor(product)}
			/>
		</Page>
	);
}

export const getServerSideProps = async (ctx) => {
	const product = await graphql(PRODUCT_QUERY, { id: ctx.query.slug });

	return {
		props: {
			product: product && product.data && product.data.node,
		},
	};
};
