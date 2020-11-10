import SubscriptionCard from '../subscription-card';

const cardData = [
	{
		imageSrc: '/images/global/greenbottle.png',
		title: 'Subscribe w/o DNA Testing',
		info: 'Hello Health!',
		price: '$99',
		term: '1 Month',
		attributes: [{ text: '1 box a month' }],
		buttonText: 'Subscribe Today',
	},
	{
		imageSrc: '/images/updates/windchime.jpg',
		title: 'Subscribe w/ DNA Testing',
		info: 'Custom Crafted For You',
		price: '$79.99',
		term: '1 Month',
		attributes: [
			{ text: '1 box per month' },
			{ text: 'mix & match terpenes' },
			{ text: 'Pair with dna test kit' },
		],
		buttonText: 'Subscribe Today',
	},
	// {
	// 	imageSrc: '/images/global/milk.png',
	// 	title: 'Lorem ipsum dolor',
	// 	info:
	// 		'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
	// 	price: '$299.99',
	// 	term: '18 Months',
	// 	attributes: [
	// 		{ text: '4 box per month' },
	// 		{ text: 'mix & match terpenes' },
	// 		{ text: 'Pair with dna test kit' },
	// 		{ text: 'Birthday box extra' },
	// 	],
	// 	buttonText: 'Add to Cart',
	// },
];

const SubscriptionsCardsContainer = () => {
	return (
		<div className="subscriptions-cards subscription-options container _80">
			<h4 className="heading-3 mb-xxl">Subscribe to Regular Wellness</h4>
			<div className="subscription-options__cards">
				{cardData.map((card, i) => (
					<SubscriptionCard type="secondary" {...card} />
				))}
			</div>
		</div>
	);
};

export default SubscriptionsCardsContainer;
