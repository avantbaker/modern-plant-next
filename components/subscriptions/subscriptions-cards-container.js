import SubscriptionCard from '../subscription-card';

const cardData = [
	{
		imageSrc: '/images/global/greenbottle.png',
		title: 'Hello Health!',
		info:
			'Subscribe without DNA testing.  Terpene selection will be generated based on completing a health survey.',
		price: '$99',
		term: '1 Month',
		attributes: [{ text: '1 box a month' }],
		buttonText: 'Subscribe Today',
	},
	{
		imageSrc: '/images/updates/windchime.jpg',
		title: 'Custom Crafted For You',
		info:
			'Subscribe with DNA testing that will provide you with your terpene custom blend',
		price: '$79.99',
		term: '1 Month',
		attributes: [
			{ text: '1 box per month' },
			{ text: 'mix & match terpenes' },
			{ text: 'Pair with dna test kit' },
		],
		buttonText: 'Subscribe Today',
	},
	{
		imageSrc: '/images/global/milk.png',
		title: 'Ahead of the Game',
		info:
			'Upload your existing DNA test results to get started on your monthly subscription.',
		price: '$299.99',
		term: '18 Months',
		attributes: [
			{ text: '1 box per month' },
			{ text: 'mix & match terpenes' },
			{ text: 'Pair with dna test kit' },
		],
		buttonText: 'Subscribe Today',
	},
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
